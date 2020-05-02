import { TestBed, inject } from '@angular/core/testing';

import { BookRepository } from './book.repository';

describe('BookRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookRepository]
    });
  });

  it('should ...', inject([BookRepository], (service: BookRepository) => {
    expect(service).toBeTruthy();
  }));
});