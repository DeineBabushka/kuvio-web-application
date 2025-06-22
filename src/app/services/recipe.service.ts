import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private apiUrl = 'http://localhost:3000/api/recipes/random';

  constructor(private http: HttpClient) {}

  getRandomRecipes(count: number = 15): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/api/recipes/random?count=${count}`);
  }
}




