import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ValidFormService } from '../../service/validForm.service';
import { AuthService } from '../../service/auth.service';
import { ImportsModule } from '../../../shared/imports';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ImportsModule
  ],
  providers: [MessageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {

  constructor(private messageService: MessageService) {}

  // Inyeccion de dependecncias angular
  router = inject(Router)
  fb = inject(FormBuilder)

  // Inyeccion de dependencias propias
  validForm = inject(ValidFormService)
  AuthService = inject(AuthService)

  // Signal que controla si se ha hecho el register
  canRegister = signal(false)

  // Signal que controla si se ha enviado el form
  isSubmit = signal(false)

  // Formulario de registro
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repitPassword: ['', [Validators.required, Validators.minLength(6)]]
  })

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al hacer el registro', life: 2000 });
  }

  showPasswordError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Las contraseñas deben ser iguales', life: 2000 });
  }

  showSuccess() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registro completado' });
  }

  // Método que hace la petición a la api
  onSubmit(): void{
    const { name = "", password = "", repitPassword = "" } = this.registerForm.value
    if (this.registerForm.invalid) return
    if (password === repitPassword){
      this.AuthService.register( name, password ).subscribe((canRegister) => {
        this.isSubmit.set(true)
        this.canRegister.set(canRegister)
        if (canRegister) {
          this.showSuccess()
          setTimeout(() => {
            this.router.navigateByUrl("/auth/login")
          }, 1500)
        } else {
          this.showError()
        }
      })
    } else {
      this.showPasswordError()
    }
  }
}
