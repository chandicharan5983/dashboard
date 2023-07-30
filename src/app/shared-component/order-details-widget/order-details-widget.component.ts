import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-details-widget',
  templateUrl: './order-details-widget.component.html',
  styleUrls: ['./order-details-widget.component.css']
})
export class OrderDetailsWidgetComponent {

  @Input() data: any;

}
