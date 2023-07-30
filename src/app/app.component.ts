import { Component } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  template: `
    App Component

    <div>
      <ng-template *ngComponentOutlet="dynamicComponent; inputs: inputs"></ng-template>
    </div>
  `
})
export class AppComponent {
  dynamicComponent = DynamicComponent;
  inputs = {
    name: 'Dynamic Component',
    customValue: 'Custom value text'
  }
}
