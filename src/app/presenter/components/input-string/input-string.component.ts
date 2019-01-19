import { Component, Input } from '@angular/core';

@Component({
  selector: 'chll-input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.scss'],
})
export class InputStringComponent {
  @Input() label: string;
  @Input() value: string;
}
