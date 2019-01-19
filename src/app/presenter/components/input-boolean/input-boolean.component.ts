import { Component, Input } from '@angular/core';

@Component({
  selector: 'chll-input-boolean',
  templateUrl: './input-boolean.component.html',
  styleUrls: ['./input-boolean.component.scss'],
})
export class InputBooleanComponent {
  @Input() label: string;
  @Input() value: any;
}
