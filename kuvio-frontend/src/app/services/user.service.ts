import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private baseUrl = 'http://localhost:3000/api/user';

    constructor(private http: HttpClient) { }

    getProfile(): Observable<any> {
        return this.http.get(`${this.baseUrl}/profile`);
    }

    updateProfile(id: string, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }

    deleteProfile(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getPublicUser(username: string): Observable<any> {
        return this.http.get(`http://localhost:3000/api/user/public/${username}`);
    }

}
