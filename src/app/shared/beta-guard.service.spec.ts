/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BetaGuardService } from './beta-guard.service';

describe('Service: BetaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetaGuardService]
    });
  });

  it('should ...', inject([BetaGuardService], (service: BetaGuardService) => {
    expect(service).toBeTruthy();
  }));
});
