import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';


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

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.tokenService.saveToken(res.token);
        this.showToast('Erfolgreich angemeldet!', false);

        setTimeout(() => this.router.navigate(['/']), 2000);
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

    setTimeout(() => this.showMessage = false, 5000);
  }
}
