import { Component } from '@angular/core';
import { NAV_BAR } from 'src/app/constant.ts/constantData';
import { NAV } from 'src/app/constant.ts/interface';

@Component({
  selector: 'app-top-bar-container',
  templateUrl: './top-bar-container.component.html',
  styleUrls: ['./top-bar-container.component.css']
})
export class TopBarContainerComponent {
  navBar: Array<NAV> = NAV_BAR;

}
