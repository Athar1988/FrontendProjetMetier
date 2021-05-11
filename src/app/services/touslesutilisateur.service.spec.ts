import { TestBed } from '@angular/core/testing';

import { TouslesutilisateurService } from './touslesutilisateur.service';

describe('TouslesutilisateurService', () => {
  let service: TouslesutilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouslesutilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
