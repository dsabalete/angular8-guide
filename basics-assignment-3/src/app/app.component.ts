import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  loglines = [];
  counter = 0;

  toggle() {
    this.showPassword = !this.showPassword;
    this.counter++;
    this.loglines.push({ time: new Date(), counter: this.counter });
  }
}
