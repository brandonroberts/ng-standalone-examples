import { Component, importProvidersFrom, INJECTOR_INITIALIZER, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

export class Service {
  onInit() {
    console.log('init');
  }
}

@NgModule({
  providers: [
    Service,
    {
      provide: INJECTOR_INITIALIZER,
      useFactory(service: Service) {
        return () => {
          service.onInit();
        };
      },
      deps: [Service],
      multi: true
    }
  ],
})
export class ServiceModule {
  constructor() {
    console.log('ngmodule')
  }
}

@Component({
  selector: 'app-test',
  template: `
    <p>test works!</p>
  `,
  standalone: true,
  imports: [
    ServiceModule
  ],
  providers: [

  ]
})
export class TestComponent {}

export const routes: Routes = [
  {
    path: '',
    providers: [
      ...importProvidersFrom(
        StoreModule.forFeature('test', () => true)
      )            
    ],
    component: TestComponent
  }
];