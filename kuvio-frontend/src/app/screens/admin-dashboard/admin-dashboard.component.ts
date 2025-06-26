import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  imports: [ReactiveFormsModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  data: any;
  error: string | null = null;
  displayedColumns: string[] = ['userID', 'picture', 'firstname', 'lastname', 'username', 'role', 'is_deleted', 'actions'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(): void {
    const token: string | null = localStorage.getItem("token");

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get('http://localhost:3000/api/user', { headers }).subscribe({
      next: (response) => {
        this.data = response
      },
      error: (err) => this.error = `Error: ${err.message}`
    });
  }

  deleteUserPermanently(id: string): void {
    const token: string | null = localStorage.getItem("token");

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.delete(`http://localhost:3000/api/user/admin/${id}`, { headers }).subscribe({
      next: () => {
        this.getAllUsers();
      }
    });
  }

  deleteUser(id: string, action: string): void {
    const token: string | null = localStorage.getItem("token");

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Action': `${action}`
    });

    this.http.delete(`http://localhost:3000/api/user/${id}`, { headers }).subscribe({
      next: () => {
        this.getAllUsers();
      }
    });
  }
}
