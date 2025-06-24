import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';
import { SeasonalComponent } from '../../shared/seasonal/seasonal.component';
import { QuoteOfTheDayComponent } from '../../shared/quote-of-the-day/quote-of-the-day.component';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { RecipeCarouselComponent } from '../../shared/recipe-carousel/recipe-carousel.component';


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [
    SeasonalComponent,
    QuoteOfTheDayComponent,
    RecipeCarouselComponent
],
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css'],
})
export class StartScreenComponent implements OnInit {
  recipes: any[] = [];

  constructor(
    public recipeService: RecipeService,
    public tokenservice: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recipeService.getRandomRecipes().subscribe({
      next: (res: any[]) => {
        this.recipes = res;
      },
      error: (err) => {
        alert('Fehler beim Laden der Rezepte');
      }
    });
  }

  goToRecipeDetail(recipeId: string): void {
    this.router.navigate(['/recipe', recipeId]);
  }
}
