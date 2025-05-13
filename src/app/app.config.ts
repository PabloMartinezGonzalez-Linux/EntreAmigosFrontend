import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config'

import { routes } from './app.routes';
import MyPreset from '../../mypreset';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme:{
        preset: MyPreset,
      },
    }),
  ]
};
