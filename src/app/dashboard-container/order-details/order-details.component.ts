import { Component } from '@angular/core';
import { ORDER_DETAILS_DATA } from 'src/app/constant.ts/constantData';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  orderDetails = ORDER_DETAILS_DATA;
}
