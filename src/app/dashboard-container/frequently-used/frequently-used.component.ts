import { Component } from '@angular/core';
import { FREQUENTLY_USED_DATA } from 'src/app/constant.ts/constantData';

@Component({
  selector: 'app-frequently-used',
  templateUrl: './frequently-used.component.html',
  styleUrls: ['./frequently-used.component.css']
})
export class FrequentlyUsedComponent {

  frequentlyUsedData = FREQUENTLY_USED_DATA


}
