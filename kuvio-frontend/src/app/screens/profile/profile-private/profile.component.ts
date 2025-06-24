import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: {
    firstname: string;
    lastname: string;
    username: string;
    preferences: string;
    picture: string;
  } | null = null;

  isLoading: boolean = true;
  error: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = true;
        this.isLoading = false;
      }
    });
  }

  navigateToComments(): void {
    if (!this.profile) {
      alert('Profil wird noch geladen...');
      return;
    }
    this.router.navigate(['/profile/comments']);
  }
}
