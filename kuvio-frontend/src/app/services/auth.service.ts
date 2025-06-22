import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getUsername(): string | null {
        const token = this.getToken();
        if (!token) return null;
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.username;
        } catch (e) {
            return null;
        }
    }

    getRole(): string | null {
        const token = this.getToken();
        if (!token) return null;
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.role;
        } catch (e) {
            return null;
        }
    }

    isAdmin(): boolean {
        return this.getRole() === 'admin';
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('UserID');
    }
}
