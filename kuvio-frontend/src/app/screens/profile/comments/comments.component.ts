import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  userId!: string;
  currentUserId!: string;
  profile: any = null;
  comments: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCurrentUserProfile(); // ⬅️ Erst Profil laden (inkl. userId)
  }

  loadCurrentUserProfile(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>('http://localhost:3000/api/user/profile', { headers })
      .subscribe({
        next: (data) => {
          this.profile = data;
          this.currentUserId = data.userID || data.id;
          this.userId = data.userID || data.id;

          this.loadComments(); // ⬅️ Jetzt ist userId vorhanden → Kommentare laden
        },
        error: (err) => console.error('Fehler beim Laden des Profils:', err)
      });
  }

  loadComments(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>(`http://localhost:3000/api/comments/user/${this.userId}`, { headers })
      .subscribe({
        next: (res) => {
          this.comments = res.message;

          this.comments.forEach(comment => {
            this.http.get<any>(`http://localhost:3000/api/recipes/${comment.recipeID}`)
              .subscribe({
                next: (recipe) => {
                  comment.recipeTitle = recipe.title;
                },
                error: (err) => {
                  console.error(`Fehler beim Laden von Rezept ${comment.recipeID}:`, err);
                  comment.recipeTitle = '(Fehler beim Laden)';
                }
              });
          });
        },
        error: (err) => console.error('Fehler beim Laden der Kommentare:', err)
      });
  }

  deleteComment(commentID: number): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    if (!confirm('Willst du diesen Kommentar wirklich löschen?')) return;

    this.http.delete(`http://localhost:3000/api/comments/${commentID}`, { headers })
      .subscribe({
        next: () => {
          console.log('Kommentar erfolgreich gelöscht');
          this.comments = this.comments.filter(c => c.commentID !== commentID);
        },
        error: (err) => console.error('Fehler beim Löschen des Kommentars:', err)
      });
  }
}
