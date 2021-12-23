import { TestBed } from '@angular/core/testing';

import { CreateTimelineService } from './create-timeline.service';

describe('CreateTimelineService', () => {
  let service: CreateTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
