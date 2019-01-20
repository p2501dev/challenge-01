import { Component } from '@angular/core';

@Component({
  selector: 'chll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text: string;
  object: any;

  constructor() {
    this.text = `
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
    `;

    this.object = JSON.parse(this.text);
    this.text = JSON.stringify(this.object, undefined, 2);
  }
}
