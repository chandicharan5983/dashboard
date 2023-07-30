import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarContainerComponent } from './top-bar-container/top-bar-container.component';



@NgModule({
  declarations: [
    TopBarContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TopBarContainerComponent]
})
export class TopBarModule { }
