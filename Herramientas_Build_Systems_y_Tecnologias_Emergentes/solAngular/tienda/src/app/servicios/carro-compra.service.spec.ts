/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarroCompraService } from './carro-compra.service';

describe('CarroCompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarroCompraService]
    });
  });

  it('should ...', inject([CarroCompraService], (service: CarroCompraService) => {
    expect(service).toBeTruthy();
  }));
});
