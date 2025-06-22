import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoriteService } from '../../services/favorite.service';
import { Router } from '@angular/router';


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

  constructor(private favoriteService: FavoriteService, private router: Router) { }

  ngOnInit(): void {
    const rawId = localStorage.getItem('userId');

    if (rawId) {
      this.userId = rawId;
    } else {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = this.decodeToken(token);
        if (decoded?.id) {
          const userId = decoded.id.toString();
          console.log('userId aus Token:', userId);
          this.userId = userId;

          if (typeof userId === 'string') {
            localStorage.setItem('userId', userId);
          }
        } else {
          console.warn('Keine userId im Token gefunden.');
          return;
        }
      } else {
        console.warn('Kein Token im localStorage gefunden.');
        return;
      }
    }

    this.favoriteService.getFavorites(this.userId).subscribe({
      next: (res: any) => {
        console.log('Favoriten vom Server:', res.message);
        this.favorites = res.message;
      },
      error: (err) => {
        console.error('Fehler beim Abrufen der Favoriten:', err);
      }
    });
  }

 
  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Token konnte nicht decodiert werden:', e);
      return null;
    }
  }

  removeFavorite(recipeId: string, event: Event): void {
    event.stopPropagation(); 

    this.favoriteService.removeFavorite(this.userId, recipeId).subscribe({
      next: () => {
        this.favorites = this.favorites.filter(recipe => recipe._id !== recipeId);
      },
      error: (err) => console.error('Fehler beim Entfernen des Favoriten:', err)
    });
  }

  openRecipe(id: string): void {
    this.router.navigate(['/recipe', id]);
  }

}
