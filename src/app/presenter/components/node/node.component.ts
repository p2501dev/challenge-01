import { Component, Input } from '@angular/core';

import { NodeContent } from '../../models/node-content';

@Component({
  selector: 'chll-node',
  templateUrl: './node.component.html',
})
export class NodeComponent {
  _input: any;
  get input(): any {
    return this._input;
  }
  @Input()
  set input(input: any) {
    if (!input) {
      return;
    }

    this._input = input;
    this.content = Object.keys(this._input).map(key => {
      const value = this._input[key];
      return <NodeContent>{ label: key, value: value, type: typeof value };
    });
  }

  content: NodeContent[] = [];
}
