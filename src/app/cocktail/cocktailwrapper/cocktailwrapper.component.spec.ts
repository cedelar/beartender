import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailwrapperComponent } from './cocktailwrapper.component';

describe('CocktailwrapperComponent', () => {
  let component: CocktailwrapperComponent;
  let fixture: ComponentFixture<CocktailwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailwrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
