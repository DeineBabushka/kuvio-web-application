import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../shared/search/search.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes-screen',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, FormsModule],
  templateUrl: './recipes-screen.component.html',
  styleUrls: ['./recipes-screen.component.css']
})
export class RecipesScreenComponent {
  recipes: any[] = [];

  setRecipes(recipes: any[]) {
    this.recipes = recipes;
  }
}
