import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { KartingService } from '../../../events/karting/service/karting.service';
import { AdminService } from '../../../shared/services/admin.service';

@Component({
  selector: 'app-admin-users',
  imports: [
    ImportsModule
  ],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersComponent {

  constructor(){this.adminService.loadAllUsers().subscribe()}

  adminService = inject(AdminService)

}
