import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { TokenService } from '../../../services/token.service';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';
  showMessage = false;
  messageText = '';
  isError = false;

  profile = {
    firstname: '',
    lastname: '',
    preferences: '',
    password: '',
    username: '',
    picture: 'character_9.png',
    role: ''
  };

  currentProfile = {
    firstname: '',
    lastname: '',
    preferences: '',
    picture: ''
  };

  showAvatarSelection = false;
  avatarOptions: string[] = Array.from({ length: 9 }, (_, i) => `character_${i + 1}.png`);

  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (data: any) => {
        this.profile.username = data.username;
        this.profile.picture = data.picture;
        this.profile.role = data.role;

        this.currentProfile = {
          firstname: data.firstname,
          lastname: data.lastname,
          preferences: data.preferences,
          picture: data.picture
        };

        this.profile.firstname = data.firstname;
        this.profile.lastname = data.lastname;
        this.profile.preferences = data.preferences;
      },
      error: (err: any) => {
        this.showToast('Profil konnte nicht geladen werden.', true);
      }
    });
  }

  selectAvatar(avatar: string): void {
    this.profile.picture = avatar;
    this.showAvatarSelection = false;
  }

  saveProfile(): void {
    const userId = this.tokenService.getUserId();
    if (!userId) {
      return;
    }

    const body: any = {};

    if (this.profile.firstname && this.profile.firstname !== this.currentProfile.firstname) {
      body.firstname = this.profile.firstname;
    }

    if (this.profile.lastname && this.profile.lastname !== this.currentProfile.lastname) {
      body.lastname = this.profile.lastname;
    }

    if (this.profile.preferences && this.profile.preferences !== this.currentProfile.preferences) {
      body.preferences = this.profile.preferences;
    }

    if (this.profile.picture && this.profile.picture !== this.currentProfile.picture) {
      body.picture = this.profile.picture;
    }

    if (this.profile.password && this.profile.password.trim() !== '') {
      const password = this.profile.password;

      const isValidPassword =
        password.length >= 8 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password);

      if (!isValidPassword) {
        this.showToast(
          'Das Passwort muss mindestens 8 Zeichen lang sein und einen Kleinbuchstaben, einen Großbuchstaben, eine Zahl und ein Sonderzeichen enthalten.',
          true
        );
        return;
      }

      body.password = password;
    }

    if (Object.keys(body).length === 0) {
      return;
    }

    this.userService.updateProfile(userId, body).subscribe({
      next: () => {
        this.currentProfile = {
          firstname: this.profile.firstname,
          lastname: this.profile.lastname,
          preferences: this.profile.preferences,
          picture: this.profile.picture
        };

        this.profile.password = '';
        this.showToast('Deine Profildaten wurden erfolgreich aktualisiert.', false);
      },
      error: () => {
        this.showToast('Fehler beim Aktualisieren des Profils.', true);
      }
    });
  }

  deleteProfile(): void {
    const confirmed = confirm('Möchtest du dein Profil wirklich löschen?');
    if (!confirmed) return;

    const userId = this.tokenService.getUserId();
    if (!userId) {
      return;
    }

    this.userService.deleteProfile(userId).subscribe({
      next: () => {
        this.tokenService.logout();
        this.showToast('Dein Profil wurde gelöscht.', false);
        setTimeout(() => window.location.href = '/', 2000);
      },
      error: () => {
        this.showToast('Fehler beim Löschen des Profils.', true);
      }
    });
  }

  showToast(message: string, error: boolean): void {
    this.messageText = message;
    this.isError = error;
    this.showMessage = true;

    setTimeout(() => this.showMessage = false, 5000);
  }
}
