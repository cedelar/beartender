import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxwrapperComponent } from './boxwrapper.component';

describe('BoxwrapperComponent', () => {
  let component: BoxwrapperComponent;
  let fixture: ComponentFixture<BoxwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxwrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
