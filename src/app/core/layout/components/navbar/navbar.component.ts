import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../shared/imports';
import { AuthService } from '../../../../auth/service/auth.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ImportsModule,
    TieredMenuModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  authService = inject(AuthService);

  items: MenuItem[] | undefined;
  tools = computed(() => {
    const user = this.authService.user();
    if (user?.role_id === 1) {
      return [
        {
          icon: 'pi pi-pencil',
          label: 'Resultados',
          command: () => this.router.navigate(['/admin/updateEventResults']),
        },
        {
          icon: 'pi pi-book',
          label: 'Eventos',
          command: () => this.router.navigate(['/admin/updateEvents']),
        },
        {
          icon: 'pi pi-users',
          label: 'Usuarios',
          command: () => this.router.navigate(['/admin/adminUsers']),
        },
        {
          icon: 'pi pi-user',
          label: 'Profile',
          command: () => this.router.navigate(['/profile']),
        },
      ];
    } else if (user?.role_id === 2) {
      return [
        {
          icon: 'pi pi-user',
          label: 'Profile',
          command: () => this.router.navigate(['/profile']),
        },
      ];
    }
    return [];
  })

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-plus',
        label: 'Karting',
        items: [
          {
            command: () => this.router.navigate(['/sports/karting/events']),
            icon: 'pi pi-bars',
            label: 'Eventos',
          },
          {
            command: () => this.router.navigate(['/sports/karting/next-event']),
            icon: 'pi pi-calendar-clock',
            label: 'Próximo Evento',
          },
          {
            command: () =>
              this.router.navigate(['/sports/karting/classification']),
            icon: 'pi pi-crown',
            label: 'Clasificación',
          },
        ],
      },
      {
        icon: 'pi pi-plus',
        label: 'Bolos',
        items: [
          {
            command: () => this.router.navigate(['/sports/bowling/events']),
            icon: 'pi pi-bars',
            label: 'Eventos',
          },
          {
            command: () => this.router.navigate(['/sports/bowling/next-event']),
            icon: 'pi pi-calendar-clock',
            label: 'Próximo Evento',
          },
          {
            command: () =>
              this.router.navigate(['/sports/bowling/classification']),
            icon: 'pi pi-crown',
            label: 'Clasificación',
          },
        ],
      },
      {
        icon: 'pi pi-plus',
        label: 'Pádel',
        items: [
          {
            command: () => this.router.navigate(['/sports/padel/events']),
            icon: 'pi pi-bars',
            label: 'Eventos',
          },
          {
            command: () => this.router.navigate(['/sports/padel/next-event']),
            icon: 'pi pi-calendar-clock',
            label: 'Próximo Evento',
          },
          {
            command: () =>
              this.router.navigate(['/sports/padel/classification']),
            icon: 'pi pi-crown',
            label: 'Clasificación',
          },
        ],
      },
    ];


  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Seguro que quieres cerrar sesion?',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Has cerrado sesión',
          life: 3000,
        });
        setTimeout(() => {
          this.authService.logOut();
        }, 1500);
      },
      reject: () => {},
    });
  }
}
