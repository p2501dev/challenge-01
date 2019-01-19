import { Component } from '@angular/core';

@Component({
  selector: 'chll-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss'],
})
export class PresenterComponent {
  input: any;

  constructor() {
    this.input = JSON.parse(`
  {
    "a": true,
    "b": 1,
    "c": "Hello, World!",
    "d": {
      "e": "I am a nested string!",
      "f": {
        "g": {
          "h": {
            "i": "So am I!",
            "j": false,
            "k": 123,
            "l": "And I am last!"
          }
        }
      }
    }
  }
  `);
  }
}
