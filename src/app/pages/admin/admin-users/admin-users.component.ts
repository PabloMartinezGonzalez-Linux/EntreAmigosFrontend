import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { AdminService } from '../../../shared/services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-admin-users',
  imports: [ReactiveFormsModule, ImportsModule, TableModule, CommonModule],
  providers: [MessageService],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersComponent implements OnInit{

  adminService = inject(AdminService);
  users$: Observable<User[]> = this.adminService.usersObservable$;
  cols!: any[];

  constructor(private messageService: MessageService) {
    this.adminService.loadAllUsers().subscribe();
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'User_id' },
      { field: 'name', header: 'Name' },
      { field: 'role_id', header: 'Role_id' },
      { field: 'address', header: 'Address' },
      { field: 'age', header: 'Age' },
      { field: 'gender', header: 'Gender' },
      { field: 'phone_number', header: 'Phone_number' },
      { field: 'delete', header: 'Delete' }
    ];
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Cambios realizados',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Error al hacer los cambios',
    });
  }

  deleteUser(user_id: number): void {
    this.adminService.deleteUser(user_id).subscribe((canDelete) => {
      canDelete ? this.showSuccess() : this.showError()
    });
  }

  changeUserRole(eventTarget: EventTarget | null, user_id: number): void{
    const event = eventTarget as HTMLSelectElement ?? null
    if (event) {
      this.adminService.setRoleByUserId(user_id, +event.value).subscribe((canSet) => {
        canSet ? this.showSuccess() : this.showError()
      })
    }
  }
}
