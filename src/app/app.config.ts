import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['http://localhost:4200'],
          disallowedRoutes: ['http://example.com/examplebadroute/'],
        },
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
