import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderselectComponent } from './orderselect.component';

describe('OrderselectComponent', () => {
  let component: OrderselectComponent;
  let fixture: ComponentFixture<OrderselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
