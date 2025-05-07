import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  // Inyeccion de dependencias AuthService
  authService = inject(AuthService)
  // Inyeccion de dependencias FormBuilder
  private fb = inject(FormBuilder)

  /**
   * Formulario de logueo
   * name para el nombre campo requerido
   * password para la contraseña campo requerido minimo 6 char
   */
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  /**
   * @param controlName - se le pasa el nombre del control que queremos comprobar
   * @returns Este método devuelve un boolean o null de los errores tenga un input del  formulario
   */
  isValidField( controlName: string ): boolean | null{
    return !! this.myForm.controls[controlName].errors
  }

  /**
   *
   * @param fieldName - se le pasa el nombre del control que queremos comprobar
   * @returns Este método devuelve un string que indica el error que tiene el input del formulario que le hemos pasado
   */
  getFieldError( fieldName: string ): string | null{
    if (!this.myForm.controls[fieldName].errors) return null

    const errors = this.myForm.controls[fieldName].errors ?? {}

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

  /**
   * Metodo que simula la peticion a la api y setea el signal de logueo a true
   * TODO: Petición a la api para comprobar el user
   */
  onSubmit(): void{
    if ( this.myForm.value.name === "Pablo" && this.myForm.value.password === "123456" ) {
      this.authService.changeLogin()
    }
  }
}
