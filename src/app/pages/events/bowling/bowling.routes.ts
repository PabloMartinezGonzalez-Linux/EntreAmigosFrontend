import { Routes } from "@angular/router";

export const bowlingRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path:'events',
        loadComponent: () => import('./bowling-events/bowling-events.component').then((m) => m.BowlingEventsComponent)
      },
      {
        path:'next-event',
        loadComponent: () => import('./bowling-next-event/bowling-next-event.component').then((m) => m.BowlingNextEventComponent)
      },
      {
        path:'classification',
        loadComponent: () => import('./bowling-classification/bowling-classification.component').then((m) => m.BowlingClassificationComponent)
      },
      {
        path: '**',
        redirectTo: 'events'
      }
    ]
  }
]
