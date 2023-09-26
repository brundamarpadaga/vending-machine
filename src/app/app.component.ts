import { Component } from '@angular/core';
import { Section } from './section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSection: Section | undefined; // Define the property
  title = 'vending-machine';
}
