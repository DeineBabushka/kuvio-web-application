import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-carousel.component.html',
  styleUrls: ['./recipe-carousel.component.css']
})

export class RecipeCarouselComponent implements OnInit {
  @Input() recipes: any[] = [];
  @Output() navigateTo = new EventEmitter<string>();

  currentIndex = 0;
  visibleRecipes: any[] = [];

  ngOnInit(): void {
    this.updateVisibleRecipes();
  }

  ngOnChanges(): void {
    this.updateVisibleRecipes();
  }

  updateVisibleRecipes(): void {
    this.visibleRecipes = this.recipes.slice(this.currentIndex, this.currentIndex + 5);
  }

  next(): void {
    if (this.currentIndex + 5 < this.recipes.length) {
      this.currentIndex++;
      this.updateVisibleRecipes();
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleRecipes();
    }
  }

  onCardClick(id: string): void {
    this.navigateTo.emit(id);
  }
}
