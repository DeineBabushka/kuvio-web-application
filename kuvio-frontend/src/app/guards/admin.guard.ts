import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/not-authorized']);
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      if (payload.role === 'admin') {
        return true;
      } else {
        this.router.navigate(['/not-authorized']);
        return false;
      }

    } catch (err) {
      this.router.navigate(['/not-authorized']);
      return false;
    }
  }
}
