import { Component, Input } from '@angular/core';
import { FREQUENTLY_USED_DATA } from 'src/app/constant.ts/interface';

@Component({
  selector: 'app-frequently-widget',
  templateUrl: './frequently-widget.component.html',
  styleUrls: ['./frequently-widget.component.css']
})
export class FrequentlyWidgetComponent {

  @Input() data: FREQUENTLY_USED_DATA = {
    title: '',
    message: '',
    actionButton: ''
  };
}
