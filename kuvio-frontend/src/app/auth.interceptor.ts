import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = localStorage.getItem('token');
  const router = inject(Router);

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      const msg = typeof error.error === 'string'
        ? error.error
        : error.error?.message || '';

      if (error.status === 403 && msg.includes('Token ungültig oder abgelaufen')) {
        authService.logout();
        router.navigate(['/']);
      }

      return throwError(() => error);
    })
  );
};
