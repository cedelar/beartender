import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedboxlistComponent } from './orderedboxlist.component';

describe('OrderedboxlistComponent', () => {
  let component: OrderedboxlistComponent;
  let fixture: ComponentFixture<OrderedboxlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedboxlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
