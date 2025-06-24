import { Component} from '@angular/core';

import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'app-recipes-screen',
  standalone: true,
  imports: [RouterModule, SearchComponent],
  templateUrl: './recipes-screen.component.html',
  styleUrls: ['./recipes-screen.component.css']
})
export class RecipesScreenComponent {
  recipes: any[] = [];

  setRecipes(recipes: any[]) {
    this.recipes = recipes;
  }

  trackByRecipeId(index: number, recipe: any): string {
    return recipe._id;
  }

}
