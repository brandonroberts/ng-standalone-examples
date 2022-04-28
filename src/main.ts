import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const providers = [
  ...importProvidersFrom(
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./app/test.component').then(m => m.routes),
        },
      ],
      { enableTracing: true }
    ),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot()
  )
];

bootstrapApplication(AppComponent, { providers });
