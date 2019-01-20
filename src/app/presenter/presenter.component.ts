import { Component, Input } from '@angular/core';

@Component({
  selector: 'chll-presenter',
  templateUrl: './presenter.component.html',
})
export class PresenterComponent {
  @Input() value: any;
}
