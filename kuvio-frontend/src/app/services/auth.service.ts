import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
    token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/auth';

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password });
    }

    register(user: {
        firstname: string;
        lastname: string;
        username: string;
        password: string;
        picture: string;
    }): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, user);
    }
}
