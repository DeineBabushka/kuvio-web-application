import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private apiUrl = 'http://localhost:3000/api/favorites';

  constructor(private http: HttpClient) {}

  addFavorite(userId: string, recipeId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${userId}/${recipeId}`, {});
  }

  removeFavorite(userId: string, recipeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}/${recipeId}`);
  }

  getFavorites(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
}
