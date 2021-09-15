import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animation';
  public showAnimation: boolean = false;

  showAchievment() {
    this.showAnimation = true;
  }
}
