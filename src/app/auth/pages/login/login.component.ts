import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ValidFormService } from '../../service/validForm.service';


@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  // Inyeccion de dependencias angular
  private fb = inject(FormBuilder)
  router = inject(Router)

  // Inyeccion de dependencias propias
  validForm = inject(ValidFormService)
  authService = inject(AuthService)

  // Signal para controlar el error de login
  hasError = signal(false)
  // Signal para controlar si se ha enviado el form
  isSubmit = signal(false)

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
   * Metodo que hace la petición del user a la api
   */
  onSubmit(): void{
    this.isSubmit.set(true)
    const { name = "", password = "" } = this.myForm.value
    if (this.myForm.invalid) return
    this.authService.login(name, password).subscribe((isAuthtenticated) => {
      if (isAuthtenticated) {
        this.router.navigateByUrl("/")
        this.hasError.set(false)
        return
      }
      this.hasError.set(true)
    })

  }
}
