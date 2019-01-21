import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from '../services/shared.service';

@Component({
  selector: 'chll-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() value: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    const initialInput = `
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

    const obj = JSON.parse(initialInput);
    this.value = JSON.stringify(obj, undefined, 2);

    this.inputChanged();
  }

  inputChanged() {
    this.sharedService.setFormData(this.value);
  }
}
