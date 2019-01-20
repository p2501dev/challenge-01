import { Component, Input } from '@angular/core';

@Component({
  selector: 'chll-input-string',
  templateUrl: './input-string.component.html',
})
export class InputStringComponent {
  @Input() label: string;
  @Input() value: string;
}
