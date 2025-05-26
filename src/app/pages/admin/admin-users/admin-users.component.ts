import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { AdminService } from '../../../shared/services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-users',
  imports: [ReactiveFormsModule, ImportsModule],
  providers: [MessageService],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersComponent {
  constructor(private messageService: MessageService) {
    this.adminService.loadAllUsers().subscribe();
  }

  adminService = inject(AdminService);

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
    });
  }

  deleteUser(user_id: number): void {
    this.adminService.deleteUser(user_id).subscribe((canDelete) => {
      if (canDelete) {
        this.showSuccess();
      } else {
        this.showError()
      }
    });
  }
}
