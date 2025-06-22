import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  username: string = '';
  userId: string = '';
  favorites: Recipe[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const routeUsername = this.route.snapshot.paramMap.get('username');
    if (!routeUsername) {
      this.errorMessage = 'Kein Benutzername angegeben.';
      this.isLoading = false;
      return;
    }

    this.username = routeUsername;
    this.loadUserAndFavorites();
  }

  private loadUserAndFavorites(): void {
    this.http.get<any>(`http://localhost:3000/api/user/public/${this.username}`).subscribe({
      next: (user) => {
        const id = user?.userID ?? user?._id;
        if (!id) {
          console.error('Fehlende userID im API-Response:', user);
          this.errorMessage = 'Fehlende Benutzer-ID.';
          this.isLoading = false;
          return;
        }

        this.userId = id;
        this.loadFavorites();
      },
      error: (err) => {
        console.error('Benutzer nicht gefunden:', err);
        this.errorMessage = 'Benutzer nicht gefunden.';
        this.isLoading = false;
      }
    });
  }


  private loadFavorites(): void {
    this.http.get<{ message: Recipe[] }>(`http://localhost:3000/api/favorites/${this.userId}`).subscribe({
      next: (res) => {
        this.favorites = res.message ?? [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Favoriten:', err);
        this.errorMessage = 'Fehler beim Laden der Favoriten.';
        this.isLoading = false;
      }
    });
  }
}
