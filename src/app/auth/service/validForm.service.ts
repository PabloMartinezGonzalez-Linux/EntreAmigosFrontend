import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidFormService {
  constructor() { }

    /**
     * @param controlName - se le pasa el nombre del control que queremos comprobar y el formulario
     * @returns Este método devuelve un boolean o null de los errores tenga un input del  formulario
     */
    isValidField( form: FormGroup, controlName: string ): boolean | null{
      return !! form.controls[controlName].errors
    }

    /**
     *
     * @param fieldName - se le pasa el nombre del control que queremos comprobar y el formulario
     * @returns Este método devuelve un string que indica el error que tiene el input del formulario que le hemos pasado
     */
    getFieldError( form: FormGroup ,fieldName: string ): string | null{
      if (!form.controls[fieldName].errors) return null

      const errors = form.controls[fieldName].errors ?? {}

      for (const error of Object.keys(errors)) {
        switch(error){
          case 'required':
          return 'Este campo es requerido'

          case 'minlength':
            return `Minimo de ${errors['minlength'].requiredLength} caracteres`
        }
      }

      return null
    }
}
