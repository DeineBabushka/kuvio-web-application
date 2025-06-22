import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {
    if (!this.firstname || !this.lastname || !this.username || !this.password) {
      this.showToast('Bitte alle Felder ausfüllen.', true);
      return;
    }

    const isValidPassword =
      this.password.length >= 8 &&
      /[a-z]/.test(this.password) &&
      /[A-Z]/.test(this.password) &&
      /[0-9]/.test(this.password) &&
      /[^A-Za-z0-9]/.test(this.password);

    if (!isValidPassword) {
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

    this.http.post('http://localhost:3000/api/auth/register', user).subscribe({
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

  showToast(message: string, error: boolean): void {
    this.messageText = message;
    this.isError = error;
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}
