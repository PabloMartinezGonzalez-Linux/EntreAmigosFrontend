import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'updateEventResults',
        loadComponent: () => import ('./update-event-result/update-event-result.component').then((m) => m.AdminComponent)
      },
      {
        path:'adminHome',
        loadComponent: () => import ('./admin-home/admin-home.component').then((m) => m.AdminHomeComponent)
      },
      {
        path:'updateEvents',
        loadComponent: () => import ('./update-events/update-events.component').then((m) => m.UpdateEventsComponent)
      },
      {
        path:'**',
        redirectTo: 'adminHome'
      }
    ]
  }
];
