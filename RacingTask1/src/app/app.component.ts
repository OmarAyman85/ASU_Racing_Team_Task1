import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RacingTask1';
  username = '';
  log = [];
  display = false;
  onToggleDetails(){
    this.display = !this.display;
    this.log.push(this.log.length + 1);
  }
}
