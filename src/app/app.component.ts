import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  template: `
    <h2>Angular with Standalone Features</h2>

    <a routerLink="/">Home</a> | 
    <a routerLink="/lazy">Lazy Loaded Component</a>  |
    <a routerLink="/routes">Lazy Loaded Routes</a>  |
    <a routerLink="/dynamic">Dynamic Components</a>  |
  
    <router-outlet></router-outlet>
  `,
  styles: [],
  imports: [RouterModule],
  standalone: true
})
export class AppComponent {
  title = "ng-stand";
}
