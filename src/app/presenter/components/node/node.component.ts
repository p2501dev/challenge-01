import { Component, Input } from '@angular/core';

import { NodeContent } from '../../models/node-content';

@Component({
  selector: 'chll-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent {
  _input: any;
  get input(): any {
    return this._input;
  }
  @Input()
  set input(input: any) {
    this._input = input;
    this.keys = Object.keys(this._input);
    this.values = Object.keys(this._input).map(key => this._input[key]);

    this.content = Object.keys(this._input).map(key => {
      const value = this._input[key];
      return <NodeContent>{ label: key, value: value, type: typeof value };
    });

    // console.log('content', this.content);
  }

  keys: string[] = [];
  values: any[];

  content: NodeContent[] = [];
}
