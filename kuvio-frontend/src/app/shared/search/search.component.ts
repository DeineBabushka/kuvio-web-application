import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  error: string | null = null;

  showFilterMenu = false;

  form = new FormGroup({
    search: new FormControl(''),
    all: new FormControl(false),
    vegan: new FormControl(false),
    vegetarian: new FormControl(false),
    glutenFree: new FormControl(false),
    keto: new FormControl(false),
    raw: new FormControl(false),
    meat: new FormControl(false),
    lowCalorie: new FormControl(false),
    fish: new FormControl(false)
  });

  @Output() searchResult = new EventEmitter<any[]>();

  constructor(private http: HttpClient) {
    this.form.valueChanges.subscribe(values => {
      this.performSearch(values);
    });
  }

  ngOnInit(): void {
    this.performSearch(this.form.value);
  }

  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }

  private performSearch(filters: any) {
    this.http.post<any[]>(`http://localhost:3000/api/recipes/search`, filters).subscribe({
      next: (response) => {
        if (JSON.stringify(response) === "No recipes found.") {
          response = [];
        }
        console.log(response)
        this.searchResult.emit(response);
      },
      error: (err) => this.error = `Fehler: ${err.message}`
    });
  }
}
