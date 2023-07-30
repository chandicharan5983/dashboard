import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponentComponent } from './icon-component/icon-component.component';
import { FrequentlyWidgetComponent } from './frequently-widget/frequently-widget.component';
import { OrderDetailsWidgetComponent } from './order-details-widget/order-details-widget.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';



@NgModule({
  declarations: [
    IconComponentComponent,
    FrequentlyWidgetComponent,
    OrderDetailsWidgetComponent,
    ProgressChartComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [IconComponentComponent, FrequentlyWidgetComponent, OrderDetailsWidgetComponent, ProgressChartComponent]
})
export class SharedComponentModule { }
