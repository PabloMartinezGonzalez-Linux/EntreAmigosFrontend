import { Routes } from "@angular/router";

export const padelRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path:'events',
        loadComponent: () => import('./padel-events/padel-events.component').then((m) => m.PadelEventsComponent)
      },
      {
        path:'next-event',
        loadComponent: () => import('./padel-next-event/padel-next-event.component').then((m) => m.PadelNextEventComponent)
      },
      {
        path:'classification',
        loadComponent: () => import('./padel-classification/padel-classification.component').then((m) => m.PadelClassificationComponent)
      },
      {
        path: '**',
        redirectTo: 'events'
      }
    ]
  }
]
