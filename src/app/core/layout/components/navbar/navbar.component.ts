import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api'
import { TieredMenuModule } from 'primeng/tieredmenu'
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../shared/imports';
import { AuthService } from '../../../../auth/service/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ImportsModule,
    TieredMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit{

  authService = inject(AuthService)

  items: MenuItem[] | undefined;

  constructor(private router: Router){}

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-list',
        label: 'Deportes',
        items: [
          {
            icon: 'pi pi-plus',
            label: 'Karting',
            items: [
              {
                command: () => this.router.navigate(['/sports/karting/events']),
                icon:'pi pi-bars',
                label: 'Eventos',
              },
              {
                command: () => this.router.navigate(['/sports/karting/next-event']),
                icon:'pi pi-calendar-clock',
                label: 'Próximo Evento',
              },
              {
                command: () => this.router.navigate(['/sports/karting/classification']),
                icon:'pi pi-crown',
                label: 'Clasificación',

              }
            ]
          },
          {
            icon: 'pi pi-plus',
            label: 'Bolos',
            items: [
              {
                command: () => this.router.navigate(['/sports/bowling/events']),
                icon:'pi pi-bars',
                label: 'Eventos',
              },
              {
                command: () => this.router.navigate(['/sports/bowling/next-event']),
                icon:'pi pi-calendar-clock',
                label: 'Próximo Evento',
              },
              {
                command: () => this.router.navigate(['/sports/bowling/classification']),
                icon:'pi pi-crown',
                label: 'Clasificación',
              }
            ]
          },
          {
            icon: 'pi pi-plus',
            label: 'Pádel',
            items: [
              {
                command: () => this.router.navigate(['/sports/padel/events']),
                icon:'pi pi-bars',
                label: 'Eventos',
              },
              {
                command: () => this.router.navigate(['/sports/padel/next-event']),
                icon:'pi pi-calendar-clock',
                label: 'Próximo Evento',
              },
              {
                command: () => this.router.navigate(['/sports/padel/classification']),
                icon:'pi pi-crown',
                label: 'Clasificación',
              }
            ]
          }
      ]
      }
    ];
  }
}


