import { Component, Input } from '@angular/core';

import { NodeContent } from './models/node-content';

@Component({
  selector: 'chll-node',
  templateUrl: './node.component.html',
})
export class NodeComponent {
  _value: any;
  get value(): any {
    return this._value;
  }
  @Input()
  set value(input: any) {
    if (!input) {
      return;
    }

    this._value = input;
    this.content = Object.keys(this._value)
      .map(key => {
        const value = this._value[key];
        return <NodeContent>{ label: key, value: value, type: typeof value };
      })
      .filter(nc => nc.value !== null && nc.type !== 'undefined');
  }

  content: NodeContent[] = [];
}
