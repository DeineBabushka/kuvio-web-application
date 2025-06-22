import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Comment {
  commentID: string;
  userID: string;
  recipeID: string;
  rating: number;
  comment: string;
  created_at: string;
  recipeTitle?: string;
}

@Component({
  selector: 'app-public-comments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './public-comments.component.html',
  styleUrls: ['./public-comments.component.css']
})
export class PublicCommentsComponent implements OnInit {
  username = '';
  userId = '';
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const routeUsername = this.route.snapshot.paramMap.get('username');
    if (!routeUsername) return;

    this.username = routeUsername;
    this.loadUserAndComments();
  }

  private loadUserAndComments(): void {
    this.http.get<any>(`http://localhost:3000/api/user/public/${this.username}`).subscribe({
      next: (user) => {
        const id = user?.userID ?? user?._id;
        if (!id) {
          console.error('Fehlende userID im API-Response:', user);
          return;
        }

        this.userId = id;
        this.loadComments();
      },
      error: (err) => {
        console.error('Benutzer nicht gefunden:', err);
      }
    });
  }


  private loadComments(): void {
    this.http.get<{ message: Comment[] }>(`http://localhost:3000/api/comments/user/${this.userId}`).subscribe({
      next: async (res) => {
        const comments = res.message ?? [];
        for (const comment of comments) {
          try {
            const recipe = await this.http.get<any>(`http://localhost:3000/api/recipes/${comment.recipeID}`).toPromise();
            comment.recipeTitle = recipe.title;
          } catch {
            comment.recipeTitle = '(Fehler beim Laden)';
          }
        }
        this.comments = comments;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Kommentare:', err);
      }
    });
  }
}
