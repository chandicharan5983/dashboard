import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomContainerComponent } from '../bottom-container/bottom-container.component';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';



@NgModule({
  declarations: [BottomContainerComponent],
  imports: [
    CommonModule,
    SharedComponentModule,    
  ],
  exports: [BottomContainerComponent]
})
export class BottomNavBarModule { }
