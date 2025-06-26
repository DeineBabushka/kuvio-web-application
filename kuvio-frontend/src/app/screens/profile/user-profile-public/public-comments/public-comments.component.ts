import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../services/user.service';

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
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private http = inject(HttpClient);

  username = '';
  userId = '';
  comments = signal<Comment[]>([]);
  errorMessage = signal<string | null>(null);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    const routeUsername = this.route.snapshot.paramMap.get('username');
    if (!routeUsername) {
      this.errorMessage.set('Kein Benutzername angegeben.');
      this.isLoading.set(false);
      return;
    }

    this.username = routeUsername;
    this.loadUserAndComments();
  }

  private loadUserAndComments(): void {
    this.userService.getPublicUser(this.username).subscribe({
      next: (user: any) => {
        const id = user?.userID ?? user?._id;
        if (!id) {
          this.errorMessage.set('Fehlende Benutzer-ID.');
          this.isLoading.set(false);
          return;
        }

        this.userId = id;
        this.loadComments();
      },
      error: () => {
        this.errorMessage.set('Benutzer nicht gefunden.');
        this.isLoading.set(false);
      }
    });
  }

  private loadComments(): void {
    this.http.get<{ message: Comment[] }>(`http://localhost:3000/api/comments/user/${this.userId}`).subscribe({
      next: async (res: any) => {
        const comments = res.message ?? [];

        for (const comment of comments) {
          try {
            const recipe = await this.http.get<any>(`http://localhost:3000/api/recipes/${comment.recipeID}`).toPromise();
            comment.recipeTitle = recipe.title;
          } catch {
            comment.recipeTitle = '(Fehler beim Laden)';
          }
        }

        this.comments.set(comments)
        this.isLoading.set(false);
      },
      error: () => { this.errorMessage.set('Kommentare konnten nicht geladen werden.');
        this.isLoading.set(false);}

    });
  }

  commentList() {
    return this.comments();
  }

  goBack(): void {
  history.back();
}

}
