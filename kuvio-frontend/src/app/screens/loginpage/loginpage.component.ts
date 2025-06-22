import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  username = '';
  password = '';

  showMessage = false;
  messageText = '';
  isError = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(): void {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post<{ message: string; token: string }>('http://localhost:3000/api/auth/login', loginData)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);

          const decoded: any = this.decodeToken(res.token);
          localStorage.setItem('userId', decoded.id);
          localStorage.setItem('role', decoded.role);

          this.showToast('Erfolgreich angemeldet!', false);

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        error: (err) => {
          const msg = err.status === 401
            ? 'Benutzername oder Passwort ist falsch.'
            : 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
          this.showToast(msg, true);
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


  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Token konnte nicht decodiert werden:', e);
      return null;
    }
  }
}
