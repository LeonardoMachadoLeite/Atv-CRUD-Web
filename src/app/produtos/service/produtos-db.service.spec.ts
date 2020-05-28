import { TestBed } from '@angular/core/testing';

import { ProdutosDbService } from './produtos-db.service';

describe('ProdutosDbService', () => {
  let service: ProdutosDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
