import { Component, ViewContainerRef } from "@angular/core";

@Component({
  selector: 'app-dynamic-parent',
  template: `
    <p>dynamic parent component works!</p>
  `,
  standalone: true
})
export class DynamicParentComponent {
  constructor(private vcr: ViewContainerRef) {}

  ngOnInit() {
    import('./dynamic.component').then(m => {
      this.vcr.createComponent(m.DynamicComponent);
    })
  }
}