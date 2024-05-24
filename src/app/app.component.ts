import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Make sure to include this line
})
export class AppComponent {
  username: string = 'John Smith';
}
