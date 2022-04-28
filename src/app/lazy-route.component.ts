import { CommonModule } from '@angular/common';
import { Component, INJECTOR_INITIALIZER, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';

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
  selector: 'app-lazy-routes',
  template: `
    <p>lazy routes works!</p>

    Store Feature {{ test$ | async }}
  `,
  standalone: true,
  imports: [
    CommonModule,
    ServiceModule
  ],
  providers: [

  ]
})
export class LazyRouteComponent {
  test$ = this.store.select((state: any) => state.test);

  constructor(private store: Store) {}
}

