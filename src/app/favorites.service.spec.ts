import { TestBed } from '@angular/core/testing';

import { FavoriteService } from './favorites.service';

describe('LocalstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteService = TestBed.get(FavoriteService);
    expect(service).toBeTruthy();
  });
});
