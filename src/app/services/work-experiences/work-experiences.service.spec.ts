import { TestBed } from '@angular/core/testing';

import { WorkExperiencesService } from './work-experiences.service';

describe('WorkExperiencesService', () => {
  let service: WorkExperiencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExperiencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
