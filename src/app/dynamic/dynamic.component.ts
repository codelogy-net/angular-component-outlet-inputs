import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    {{ name }} works! {{ customValue }}
  `
})
export class DynamicComponent {
  @Input() name!: string;
  @Input() customValue!: string;
}
