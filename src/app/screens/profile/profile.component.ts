import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: any = null;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://localhost:3000/api/user/profile').subscribe({
      next: (data: any) => {
        this.profile = data;
      },
      error: (err: any) => {
        console.error('Fehler beim Laden des Profils:', err);
      }
    });
  }

  navigateToComments() {
    if (!this.profile?.userID) {
      alert('Profil wird noch geladen...');
      return;
    }
    this.router.navigate(['/profile/comments']);

  }
}
