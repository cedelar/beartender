import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailboxComponent } from './cocktailbox.component';

describe('CocktailboxComponent', () => {
  let component: CocktailboxComponent;
  let fixture: ComponentFixture<CocktailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
