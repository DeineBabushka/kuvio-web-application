import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FavoriteService } from '../../services/favorite.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-favorite-screen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorite-screen.component.html',
  styleUrls: ['./favorite-screen.component.css']
})
export class FavoriteScreenComponent implements OnInit {
  favorites: any[] = [];
  userId: string = '';

  constructor(
    private favoriteService: FavoriteService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.tokenService.getUserId() ?? '';
    if (!this.userId) {
      return;
    }

    this.favoriteService.getFavorites(this.userId).subscribe({
      next: (res) => {
        this.favorites = res.message ?? [];
      },
      error: (err) => {
      }
    });
  }

  removeFavorite(recipeId: string, event: Event): void {
    event.stopPropagation();

    this.favoriteService.removeFavorite(this.userId, recipeId).subscribe({
      next: () => {
        this.favorites = this.favorites.filter(recipe => recipe._id !== recipeId);
      },
      error: (err) => {
      }
    });
  }

  openRecipe(id: string): void {
    this.router.navigate(['/recipe', id]);
  }
}
