import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../services/user.service';

interface Recipe {
  _id: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-public-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './public-favorites.component.html',
  styleUrls: ['./public-favorites.component.css']
})
export class PublicFavoritesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private http = inject(HttpClient);

  username = '';
  userId = '';
  favorites = signal<Recipe[]>([]);
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    const routeUsername = this.route.snapshot.paramMap.get('username');
    if (!routeUsername) {
      this.errorMessage.set('Kein Benutzername angegeben.');
      this.isLoading.set(false);
      return;
    }

    this.username = routeUsername;
    this.loadUserAndFavorites();
  }

  private loadUserAndFavorites(): void {
    this.userService.getPublicUser(this.username).subscribe({
      next: (user: any) => {
        const id = user?.userID ?? user?._id;
        if (!id) {
          this.errorMessage.set('Fehlende Benutzer-ID.');
          this.isLoading.set(false);
          return;
        }

        this.userId = id;
        this.loadFavorites();
      },
      error: (err: any) => {
        this.errorMessage.set('Benutzer nicht gefunden.');
        this.isLoading.set(false);
      }
    });
  }

  private loadFavorites(): void {
    this.http.get<{ message: Recipe[] }>(`http://localhost:3000/api/favorites/${this.userId}`).subscribe({
      next: (res: any) => {
        this.favorites.set(res.message ?? []);
        this.isLoading.set(false);
      },
      error: (err: any) => {
        this.errorMessage.set('Fehler beim Laden der Favoriten.');
        this.isLoading.set(false);
      }
    });
  }

  favoritesList() {
    return this.favorites();
  }
}
