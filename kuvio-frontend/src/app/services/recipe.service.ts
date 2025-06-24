import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private baseUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient) {}

  getRandomRecipes(count: number = 15): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/random?count=${count}`);
  }

  getRecipeById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  searchRecipes(filters: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/search`, filters);
  }
}
