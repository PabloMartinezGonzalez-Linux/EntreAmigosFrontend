import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminGuard } from './auth/guards/admin.guard';
import { ProfileGuard } from './auth/guards/profile.guard';

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
    path:'profile',
    loadComponent: () => import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
    canMatch:[
      ProfileGuard
    ]
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
    canMatch: [
      AuthGuard,
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routes').then((m) => m.adminRoutes),
    canMatch: [
      AdminGuard
    ]
  },
  {
    path:'sports',
    loadChildren: () => import('./events/sports.routes').then((m) => m.sportsRoutes)
  },
  {
    path:'**',
    redirectTo: ''
  }
];
