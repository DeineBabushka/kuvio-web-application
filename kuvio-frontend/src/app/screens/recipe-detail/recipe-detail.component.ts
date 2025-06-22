import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  isFavorite: boolean = false;
  userId: string = '';
  comments: any[] = [];

  newComment = {
    rating: 5,
    comment: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = localStorage.getItem('userId') ?? '123';

    if (id) {
      this.http.get<any>(`http://localhost:3000/api/recipes/${id}`).subscribe({
        next: (data) => {
          this.recipe = data;
          this.checkFavorite();
          this.loadComments(data._id);
        },
        error: (err) => console.error('Fehler beim Laden des Rezepts:', err)
      });
    }
  }

  checkFavorite(): void {
    if (!this.userId || !this.recipe?._id) return;

    this.http.get<any>(`http://localhost:3000/api/favorites/${this.userId}`).subscribe({
      next: (res) => {
        const favorites = res.message;
        this.isFavorite = favorites.some(
          (fav: any) => String(fav._id) === String(this.recipe._id)
        );
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Fehler beim Laden der Favoriten:', err)
    });
  }

  toggleFavorite(): void {
    if (!this.userId || !this.recipe?._id) return;

    const recipeId = this.recipe._id;

    if (this.isFavorite) {
      this.favoriteService.removeFavorite(this.userId, recipeId).subscribe({
        next: () => {
          this.isFavorite = false;
          this.cdr.detectChanges();
        },
        error: (err) => console.error('Fehler beim Entfernen des Favoriten:', err)
      });
    } else {
      this.favoriteService.addFavorite(this.userId, recipeId).subscribe({
        next: () => {
          this.isFavorite = true;
          this.cdr.detectChanges();
        },
        error: (err) => console.error('Fehler beim Hinzufügen des Favoriten:', err)
      });
    }
  }

  loadComments(recipeId: string): void {
    this.http.get<any>(`http://localhost:3000/api/comments/recipe/${recipeId}`).subscribe({
      next: (data) => {
        this.comments = (data.message ?? []).map((comment: any) => ({
          ...comment,
          created_at: new Date(comment.created_at)
        }));
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Fehler beim Laden der Kommentare:', err)
    });
  }

  submitComment(): void {
    if (!this.recipe?._id || !this.userId) return;

    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const sqlTimestamp =
      `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
      `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    const payload = {
      id: this.userId,
      recipeID: this.recipe._id,
      rating: this.newComment.rating,
      comment: this.newComment.comment,
      created_at: sqlTimestamp
    };

    this.http.post(`http://localhost:3000/api/comments`, payload).subscribe({
      next: () => {
        this.newComment = { rating: 5, comment: '' };
        this.loadComments(this.recipe._id);
      },
      error: (err) => console.error('Fehler beim Absenden des Kommentars:', err)
    });
  }

  getStars(rating: number): any[] {
    return Array(Math.round(rating));
  }

  getEmptyStars(rating: number): any[] {
    return Array(5 - Math.round(rating));
  }
}
