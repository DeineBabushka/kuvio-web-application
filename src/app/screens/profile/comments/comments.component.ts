import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommentService } from '../../../services/comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  profile: any = null;
  comments: any[] = [];
  currentUserId: string = '';
  errorMessage: string | null = null;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getUserProfile().subscribe({
      next: (profile) => {
        this.profile = profile;
        this.currentUserId = profile.userID || profile.id;
        this.loadComments();
      },
      error: (err) => {
        this.errorMessage = 'Fehler beim Laden deines Profils.';
      }
    });
  }

  loadComments(): void {
    this.commentService.getCommentsByUser(this.currentUserId).subscribe({
      next: (comments) => {
        this.comments = comments;
        this.comments.forEach(comment => {
          this.commentService.getRecipeTitle(comment.recipeID).subscribe({
            next: (title) => comment.recipeTitle = title,
            error: () => comment.recipeTitle = '(Fehler beim Laden)'
          });
        });
      },
      error: (err) => {
        this.errorMessage = 'Fehler beim Laden der Kommentare.';
      }
    });
  }

  deleteComment(commentID: number): void {
    if (!confirm('Willst du diesen Kommentar wirklich löschen?')) return;

    this.commentService.deleteComment(commentID).subscribe({
      next: () => {
        this.comments = this.comments.filter(c => c.commentID !== commentID);
      },
      error: (err) => {
        this.errorMessage = 'Kommentar konnte nicht gelöscht werden.';
      }
    });
  }
}
