import { TestBed, inject } from '@angular/core/testing';

import { DailyLoginService } from './daily-login.service';

describe('DailyLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyLoginService]
    });
  });

  it('should be created', inject([DailyLoginService], (service: DailyLoginService) => {
    expect(service).toBeTruthy();
  }));
});
