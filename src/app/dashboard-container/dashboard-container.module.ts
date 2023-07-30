import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { FrequentlyUsedComponent } from './frequently-used/frequently-used.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    DashboardContainerComponent,
    FrequentlyUsedComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentModule
  ],
  exports: [
    DashboardContainerComponent,
    FrequentlyUsedComponent,
    OrderDetailsComponent
  ]
})
export class DashboardContainerModule { }
