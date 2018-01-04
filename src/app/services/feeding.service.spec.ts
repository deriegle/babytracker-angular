import { TestBed, inject } from '@angular/core/testing';

import { FeedingService } from './feeding.service';

describe('FeedingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedingService]
    });
  });

  it('should be created', inject([FeedingService], (service: FeedingService) => {
    expect(service).toBeTruthy();
  }));
});
