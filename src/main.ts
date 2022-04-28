import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

import { TestComponent } from './app/test.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const providers = [
  ...importProvidersFrom(
    RouterModule.forRoot(
      [
        {
          path: "",
          component: TestComponent,
        },
      ],
      { enableTracing: true }
    )
  )  
];

bootstrapApplication(AppComponent, { providers });
