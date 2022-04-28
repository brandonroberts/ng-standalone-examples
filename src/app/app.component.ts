import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  template: ` <router-outlet></router-outlet> `,
  styles: [],
  imports: [RouterModule],
  standalone: true
})
export class AppComponent {
  title = "ng-stand";
}
