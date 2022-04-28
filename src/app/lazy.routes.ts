import { importProvidersFrom } from "@angular/core";
import { Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { LazyRouteComponent } from "./lazy-route.component";

export const routes: Routes = [
  {
    path: '',
    providers: [
      ...importProvidersFrom(
        StoreModule.forFeature('test', () => true)
      )            
    ],
    component: LazyRouteComponent
  }
];