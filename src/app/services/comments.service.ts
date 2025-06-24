import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommentService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') ?? '';
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/profile`, {
      headers: this.getAuthHeaders()
    });
  }

  getCommentsByUser(userId: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/comments/user/${userId}`, {
      headers: this.getAuthHeaders()
    }).pipe(map(res => res.message ?? []));
  }

  getRecipeTitle(recipeId: string): Observable<string> {
    return this.http.get<any>(`${this.baseUrl}/recipes/${recipeId}`).pipe(
      map(res => res.title)
    );
  }

  deleteComment(commentID: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/comments/${commentID}`, {
      headers: this.getAuthHeaders()
    });
  }

  getCommentsForRecipe(recipeId: string): Observable<any> {
  return this.http.get(`http://localhost:3000/api/comments/recipe/${recipeId}`);
}

createComment(payload: any): Observable<any> {
  return this.http.post(`http://localhost:3000/api/comments`, payload);
}

}
