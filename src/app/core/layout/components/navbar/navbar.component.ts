import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api'
import { TieredMenuModule } from 'primeng/tieredmenu'
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../shared/imports';


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
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-list',
        label: 'Eventos',
        items: [
          {
            icon: 'pi pi-plus',
            label: 'Karting',
            items: [
              {
                icon:'pi pi-bars',
                label: 'Eventos',
              },
              {
                icon:'pi pi-calendar-clock',
                label: 'Próximo Evento',
              },
              {
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
                icon:'pi pi-bars',
                label: 'Eventos',
              },
              {
                icon:'pi pi-calendar-clock',
                label: 'Próximo Evento',
              },
              {
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
                icon:'pi pi-bars',
                label: 'Eventos',
              },
              {
                icon:'pi pi-calendar-clock',
                label: 'Próximo Evento',
              },
              {
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


