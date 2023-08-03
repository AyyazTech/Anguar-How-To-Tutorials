import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageUrl = 'assets/images/example.jpg';
  imageWidth = 400;
  isResponsive = false;
}
