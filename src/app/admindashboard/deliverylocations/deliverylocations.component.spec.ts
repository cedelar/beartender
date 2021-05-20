import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverylocationsComponent } from './deliverylocations.component';

describe('DeliverylocationsComponent', () => {
  let component: DeliverylocationsComponent;
  let fixture: ComponentFixture<DeliverylocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverylocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverylocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
