import { Component } from '@angular/core';
import { INDIAN_STATES } from './constant.ts/constantData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  INDIAN_STATES = INDIAN_STATES
}
