import { TestBed } from '@angular/core/testing';

import { CocktailboxDataService } from './cocktailbox-data.service';

describe('CocktailboxDataService', () => {
  let service: CocktailboxDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailboxDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
