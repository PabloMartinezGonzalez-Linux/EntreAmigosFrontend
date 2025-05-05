import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then((m) => m.AboutUsComponent)
  },
  {
    path:'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes)
  },
  {
    path:'sports',
    loadChildren: () => import('./pages/events/sports.routes').then((m) => m.sportsRoutes)
  },
  {
    path:'**',
    redirectTo: ''
  }
];
