import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyWidgetComponent } from './frequently-widget.component';

describe('FrequentlyWidgetComponent', () => {
  let component: FrequentlyWidgetComponent;
  let fixture: ComponentFixture<FrequentlyWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentlyWidgetComponent]
    });
    fixture = TestBed.createComponent(FrequentlyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
