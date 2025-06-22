import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile-public',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-profile-public.component.html',
  styleUrls: ['./user-profile-public.component.css'],
})
export class UserProfilePublicComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  user = signal<any>({});
  errorMessage = signal<string | null>(null);

  userName = this.route.snapshot.paramMap.get('username')!;

  constructor() {
    this.loadUser();
  }

  loadUser() {
    this.http.get(`http://localhost:3000/api/user/public/${this.userName}`).subscribe({
      next: (res) => {
        this.user.set(res);
        this.errorMessage.set(null);
      },
      error: (err) => {
        console.error('Fehler beim Laden des öffentlichen Profils:', err);
        this.errorMessage.set('Öffentliches Profil konnte nicht geladen werden.');
      }
    });
  }

  userData() {
    return this.user();
  }
}
