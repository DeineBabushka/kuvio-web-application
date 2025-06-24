import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent {
  firstname = '';
  lastname = '';
  username = '';
  password = '';
  picture = 'character_9.png';

  showMessage = false;
  messageText = '';
  isError = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register(): void {
    if (!this.firstname || !this.lastname || !this.username || !this.password) {
      this.showToast('Bitte alle Felder ausfüllen.', true);
      return;
    }

    if (!this.isValidPassword(this.password)) {
      this.showToast(
        'Das Passwort muss mindestens 8 Zeichen lang sein und einen Kleinbuchstaben, einen Großbuchstaben, eine Zahl und ein Sonderzeichen enthalten.',
        true
      );
      return;
    }

    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      password: this.password,
      picture: this.picture
    };

    this.authService.register(user).subscribe({
      next: () => {
        this.showToast('Registrierung erfolgreich!', false);
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        if (err.status === 409) {
          this.showToast('Benutzername ist bereits vergeben.', true);
        } else {
          this.showToast('Registrierung fehlgeschlagen. Bitte versuche es erneut.', true);
        }
      }
    });
  }

  isValidPassword(password: string): boolean {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  }

  showToast(message: string, error: boolean): void {
    this.messageText = message;
    this.isError = error;
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}
