import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
    private tokenKey = 'token';

    saveToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    decodeToken(): any | null {
        const token = this.getToken();
        if (!token) return null;
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    }

    getUserId(): string | null {
        const decoded = this.decodeToken();
        return decoded?.id ?? null;
    }

    getUsername(): string | null {
        return this.decodeToken()?.username ?? null;
    }

    getRole(): string | null {
        return this.decodeToken()?.role ?? null;
    }

    isAdmin(): boolean {
        return this.getRole() === 'admin';
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    logout(): void {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem('UserID');
    }
}
