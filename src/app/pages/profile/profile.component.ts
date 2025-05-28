import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImportsModule } from '../../shared/imports';
import { AuthService } from '../../auth/service/auth.service';
import { adminRoutes } from '../admin/admin.routes';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, ImportsModule],
  providers: [MessageService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  constructor(private messageService: MessageService) {}

  fb = inject(FormBuilder);
  authService = inject(AuthService);

  profileForm = this.fb.group({
    name: [this.authService.user()?.name],
    address: [this.authService.user()?.address],
    age: [this.authService.user()?.age],
    gender: [this.authService.user()?.gender],
    phone_number: [this.authService.user()?.phoneNumber],
  });

  show() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Datos actualizados',
      life: 3000,
    });
  }

  onSubmit() {
    if (this.profileForm.invalid) return;
    this.show()
  }
}
