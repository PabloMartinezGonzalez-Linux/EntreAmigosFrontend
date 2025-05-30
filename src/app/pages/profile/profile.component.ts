import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImportsModule } from '../../shared/imports';
import { AuthService } from '../../auth/service/auth.service';
import { adminRoutes } from '../admin/admin.routes';
import { MessageService } from 'primeng/api';
import { UpdateUser, User } from '../../auth/interfaces/user.interface';
import { ControlProfileForm } from './profile.config';
import { filter } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, ImportsModule],
  providers: [MessageService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy{
  constructor(private messageService: MessageService) {}

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  controlProfileForm = ControlProfileForm

  profileForm = this.fb.group({
    [this.controlProfileForm.NAME]: [null],
    [this.controlProfileForm.ADDRESS]: [null],
    [this.controlProfileForm.AGE]: [null],
    [this.controlProfileForm.GENDER]: [null],
    [this.controlProfileForm.PHONE_NUMBER]: [null],
  });

  ngOnInit(): void {
    this.authService.getUpdateUSer().pipe(
      filter((data) => !! data),
    ).subscribe((data) => {
      if (data) {
        this.profileForm.patchValue(data)
      }
    })
  }

  show() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Datos actualizados',
      life: 3000,
    });
  }

  error() {
    this.messageService.add({
      severity: 'error',
      summary: 'Erorr',
      detail: 'Error al actualizar',
      life: 3000,
    });
  }

  onSubmit() {
    if (this.profileForm.invalid) return;
    const userInfo: UpdateUser = this.profileForm.value
    this.authService.updateUserInfo(userInfo).subscribe(canUpdate => {
      canUpdate ? this.show() : this.error()
    })
  }

  ngOnDestroy(): void {
    this.authService.getUpdateUSer().unsubscribe()
  }
}
