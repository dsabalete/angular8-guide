import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  loglines = [];

  onToggle() {
    this.showPassword = !this.showPassword;
    this.loglines.push(new Date());
  }
}
