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
        path:'**',
        redirectTo: 'adminHome'
      }
    ]
  }
];
