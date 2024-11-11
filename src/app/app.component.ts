import { Monster } from './models/monster.model';
import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PlayingCardComponent, SearchBarComponent]
})
export class AppComponent {
  clickCount: number = 0;
  search = '';

  increaseCount() {
    this.clickCount++;
  }
}
