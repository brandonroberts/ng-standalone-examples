import { Component, importProvidersFrom, INJECTOR_INITIALIZER, NgModule } from '@angular/core';
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
    ...importProvidersFrom(
      StoreModule.forFeature('test', () => true)
    )
  ]
})
export class TestComponent {}
