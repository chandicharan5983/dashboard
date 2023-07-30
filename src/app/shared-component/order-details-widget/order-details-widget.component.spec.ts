import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsWidgetComponent } from './order-details-widget.component';

describe('OrderDetailsWidgetComponent', () => {
  let component: OrderDetailsWidgetComponent;
  let fixture: ComponentFixture<OrderDetailsWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsWidgetComponent]
    });
    fixture = TestBed.createComponent(OrderDetailsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
