import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,
  withComponentInputBinding,
  withViewTransitions
 } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient,  withInterceptors  } from '@angular/common/http';
import { authInterceptorInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([authInterceptorInterceptor])), 
    ],
};
