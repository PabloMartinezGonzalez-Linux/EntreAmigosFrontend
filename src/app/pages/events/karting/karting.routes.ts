import { Routes } from "@angular/router";

export const kartingRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path:'events',
        loadComponent: () => import('./karting-events/karting-events.component').then((m) => m.KartingEventsComponent)
      },
      {
        path:'next-event',
        loadComponent:() => import('./karting-next-event/karting-next-event.component').then((m) => m.KartingNextEventComponent)
      },
      {
        path:'classification',
        loadComponent: () => import('./karting-classification/karting-classification.component').then((m) => m.KartingClassificationComponent)
      },
      {
        path: '**',
        redirectTo: 'events'
      }
    ]
  }
]
