import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chll-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
}
