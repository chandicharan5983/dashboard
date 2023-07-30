import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarContainerComponent } from './top-bar-container.component';

describe('TopBarContainerComponent', () => {
  let component: TopBarContainerComponent;
  let fixture: ComponentFixture<TopBarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarContainerComponent]
    });
    fixture = TestBed.createComponent(TopBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
