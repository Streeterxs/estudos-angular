import { TestBed, inject } from '@angular/core/testing';

import { MercadolistaService } from './mercadolista.service';

describe('MercadolistaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercadolistaService]
    });
  });

  it('should be created', inject([MercadolistaService], (service: MercadolistaService) => {
    expect(service).toBeTruthy();
  }));
});
