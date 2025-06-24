import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteService } from '../../services/favorite.service';
import { RecipeService } from '../../services/recipe.service';
import { CommentService } from '../../services/comments.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private recipeService = inject(RecipeService);
  private commentService = inject(CommentService);
  private tokenService = inject(TokenService);
  private favoriteService = inject(FavoriteService);

  recipe: any;
  isFavorite: boolean = false;
  userId: string = '';
  comments: any[] = [];

  newComment = {
    rating: 5,
    comment: ''
  };

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = this.tokenService.getUserId() ?? '';

    if (id) {
      this.recipeService.getRecipeById(id).subscribe({
        next: (data) => {
          this.recipe = data;
          this.checkFavorite();
          this.loadComments(data._id);
        },
        error: () => {
          alert('Das Rezept konnte nicht geladen werden');
        }
      });
    }
  }

  checkFavorite(): void {
    if (!this.userId || !this.recipe?._id) return;

    this.favoriteService.getFavorites(this.userId).subscribe({
      next: (res) => {
        const favorites = res.message;
        this.isFavorite = favorites.some(
          (fav: any) => String(fav._id) === String(this.recipe._id)
        );
        this.cdr.detectChanges();
      },
      error: () => {
        alert('Fehler beim Laden der Favoriten');
      }
    });
  }

  toggleFavorite(): void {
    const recipeId = this.recipe?._id;
    if (!this.userId || !recipeId) return;

    const action = this.isFavorite
      ? this.favoriteService.removeFavorite(this.userId, recipeId)
      : this.favoriteService.addFavorite(this.userId, recipeId);

    action.subscribe({
      next: () => {
        this.isFavorite = !this.isFavorite;
        this.cdr.detectChanges();
      },
      error: () => {
        alert('Fehler beim Hinzufügen des Favoriten');
      }
    });
  }

  loadComments(recipeId: string): void {
    this.commentService.getCommentsForRecipe(recipeId).subscribe({
      next: (data) => {
        this.comments = (data.message ?? []).map((comment: any) => ({
          ...comment,
          created_at: new Date(comment.created_at)
        }));
        this.cdr.detectChanges();
      },
      error: () => {
        alert('Fehler beim Laden der Kommentare');
      }
    });
  }

  submitComment(): void {
    const recipeId = this.recipe?._id;
    if (!recipeId || !this.userId) return;

    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const sqlTimestamp =
      `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
      `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    const payload = {
      id: this.userId,
      recipeID: recipeId,
      rating: this.newComment.rating,
      comment: this.newComment.comment,
      created_at: sqlTimestamp
    };

    this.commentService.createComment(payload).subscribe({
      next: () => {
        this.newComment = { rating: 5, comment: '' };
        this.loadComments(recipeId);
      },
      error: () => {
        alert('Fehler beim Laden der Rezepte');
      }
    });
  }

  getStars(rating: number): any[] {
    return Array(Math.round(rating));
  }

  getEmptyStars(rating: number): any[] {
    return Array(5 - Math.round(rating));
  }

  protected readonly localStorage = localStorage;
}
