import { Routes } from "@angular/router";

export const sportsRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'karting',
        loadChildren: () => import('./karting/karting.routes').then((m) => m.kartingRoutes)
      },
      {
        path: 'bowling',
        loadChildren: () => import('./bowling/bowling.routes').then((m) => m.bowlingRoutes)
      },
      {
        path: 'padel',
        loadChildren: () => import('./padel/padel.routes').then((m) => m.padelRoutes)
      },
      {
        path: '**',
        redirectTo: 'karting'
      }
    ]
  }
]
