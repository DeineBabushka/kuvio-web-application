import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { SeasonalComponent } from '../../shared/seasonal/seasonal.component';
import { QuoteOfTheDayComponent } from '../../shared/quote-of-the-day/quote-of-the-day.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule, SeasonalComponent, QuoteOfTheDayComponent],
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css'],
})
export class StartScreenComponent implements OnInit {
  recipes: any[] = [];
  visibleRecipes: any[] = [];
  currentIndex = 0;

  constructor(
    public recipeService: RecipeService,
    public auth: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.recipeService.getRandomRecipes().subscribe((res: any[]) => {
      console.log('API-Antwort:', res);
      this.recipes = res;
      this.updateVisibleRecipes();
    });
  }

  updateVisibleRecipes(): void {
    this.visibleRecipes = this.recipes.slice(this.currentIndex, this.currentIndex + 5);
  }

  nextRecipe(): void {
    if (this.currentIndex + 5 < this.recipes.length) {
      this.currentIndex++;
      this.updateVisibleRecipes();
    }
  }

  prevRecipe(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleRecipes();
    }
  }

  goToRecipeDetail(recipeId: string): void {
    this.router.navigate(['/recipe', recipeId]);
  }
}
