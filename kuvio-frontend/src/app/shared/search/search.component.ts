import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
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

  constructor(private recipeService: RecipeService) {
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
    this.recipeService.searchRecipes(filters).subscribe({
      next: (response) => {
        if (typeof response === 'string' && response === 'No recipes found.') {
          this.searchResult.emit([]);
        } else {
          this.searchResult.emit(response);
        }
        this.error = null;
      },
      error: (err) => {
        this.error = `Fehler: ${err.message}`;
        this.searchResult.emit([]);
      }
    });
  }
}
