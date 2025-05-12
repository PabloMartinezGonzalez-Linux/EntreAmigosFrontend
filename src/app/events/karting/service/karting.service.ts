import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class KartingService {
  constructor() { }

  http = inject(HttpClient)

  /**
   * TODO: Hacer petición para obtener eventos y cargarlos
   */



  /**
   * TODO: Hacer petición para gargar la data del evento seleccionado
   */
}
