import { Component, Input } from '@angular/core';

@Component({
  selector: 'chll-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent {
  @Input() label: string;
  @Input() value: number;

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }
}
