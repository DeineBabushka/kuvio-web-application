import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote-of-the-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-of-the-day.component.html',
  styleUrls: ['./quote-of-the-day.component.css']
})
export class QuoteOfTheDayComponent {
  quotes: string[] = [
    '"Kochen ist Liebe, die durch den Magen geht."',
    '"Gutes Essen ist das Fundament echten Glücks."',
    '"Kochen ist eine Kunst – und du bist der Künstler!"',
    '"Ein Rezept hat keine Seele. Du als Koch bringst sie hinein."',
    '"Iss nichts, was deine Großmutter nicht als Essen erkannt hätte."',
    '"Essen ist ein Bedürfnis, Genießen eine Kunst."',
    '"Ein gutes Essen ist Balsam für die Seele."',
    '"Der Duft der Küche ist das Lächeln des Hauses."',
    '"Kochen ist der Ausdruck von Kreativität, Liebe und Kultur."',
    '"Mit Liebe gekocht, schmeckt jedes Gericht besser."',
    '"Kochen ist die schönste Art, jemandem „Ich liebe dich“ zu sagen."',
    '"In der Einfachheit liegt oft der größte Geschmack."',
    '"Jedes Gericht erzählt eine Geschichte – deine Geschichte."'
  ];

  quoteOfTheDay: string = '';

  ngOnInit() {
    const today = new Date();
    const dayOfYear = this.getDayOfYear(today);
    const index = dayOfYear % this.quotes.length;
    this.quoteOfTheDay = this.quotes[index];
  }


  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff =
      date.getTime() - start.getTime() +
      (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
}
