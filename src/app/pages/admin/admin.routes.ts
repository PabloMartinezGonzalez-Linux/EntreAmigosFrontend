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
        path:'updateEvents',
        loadComponent: () => import ('./update-events/update-events.component').then((m) => m.UpdateEventsComponent)
      },
      {
        path:'adminUsers',
        loadComponent: () => import ('./admin-users/admin-users.component').then((m) => m.AdminUsersComponent)
      },
      {
        path:'**',
        redirectTo: 'adminHome'
      }
    ]
  }
];
