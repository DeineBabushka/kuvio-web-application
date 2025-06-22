import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seasonal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.css'],
})
export class SeasonalComponent {
  today = new Date();
  monthNames = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];

  get currentMonthName(): string {
    return this.monthNames[this.today.getMonth()];
  }

  get currentMonthIndex(): number {
    return this.today.getMonth();
  }

  seasonalFoodsByMonth: { [key: number]: string[] } = {
    0: ['Grünkohl', 'Rosenkohl', 'Lauch'],
    1: ['Chicorée', 'Rote Bete', 'Feldsalat'],
    2: ['Spinat', 'Radieschen', 'Mangold'],
    3: ['Spargel', 'Kohlrabi', 'Bärlauch'],
    4: ['Erbsen', 'Salatgurke', 'Rhabarber'],
    5: ['Zucchini', 'Brokkoli', 'Blumenkohl'],
    6: ['Tomaten', 'Paprika', 'Bohnen'],
    7: ['Mais', 'Aubergine', 'Zucchini'],
    8: ['Kürbis', 'Wirsing', 'Birnen'],
    9: ['Äpfel', 'Sellerie', 'Pastinaken'],
    10: ['Rosenkohl', 'Feldsalat', 'Topinambur'],
    11: ['Grünkohl', 'Rote Bete', 'Lauch']
  };
}
