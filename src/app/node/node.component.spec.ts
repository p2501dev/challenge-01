import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NodeComponent } from './node.component';
import { InputBooleanComponent } from './components/input-boolean/input-boolean.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputStringComponent } from './components/input-string/input-string.component';
import { NodeContent } from './models/node-content';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NodeComponent,
        InputBooleanComponent,
        InputNumberComponent,
        InputStringComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('is unaffected by invalid input', () => {
    [null, undefined, { label: null }, { label: undefined }].forEach(i => {
      component.value = i;

      expect(component).toBeDefined();
      expect(component.content).toBeDefined();
      expect(component.content.length).toEqual(0);
    });
  });

  it('creates correct node-content for given valid input', () => {
    [
      {
        input: { label: 'teststring' },
        result: <NodeContent>{ label: 'label', type: 'string', value: 'teststring' },
      },
      {
        input: { label: true },
        result: <NodeContent>{ label: 'label', type: 'boolean', value: true },
      },
      {
        input: { label: 123 },
        result: <NodeContent>{ label: 'label', type: 'number', value: 123 },
      },
      {
        input: { label: {} },
        result: <NodeContent>{ label: 'label', type: 'object', value: {} },
      },
    ].forEach(testcase => {
      component.value = testcase.input;

      expect(component).toBeDefined();
      expect(component.content).toBeDefined();
      expect(component.content.length).toEqual(1);
      expect(component.content[0]).toEqual(testcase.result);
    });
  });

  it('only the correct input elements are displayed for the given valid input', () => {
    [
      { input: { label: 'teststring' }, select: 'ul > li > chll-input-string', result: true },
      { input: { label: 'teststring' }, select: 'ul > li > chll-input-number', result: false },
      { input: { label: 'teststring' }, select: 'ul > li > chll-input-boolean', result: false },
      { input: { label: 'teststring' }, select: 'ul > li > div', result: false },
      { input: { label: 123 }, select: 'ul > li > chll-input-string', result: false },
      { input: { label: 123 }, select: 'ul > li > chll-input-number', result: true },
      { input: { label: 123 }, select: 'ul > li > chll-input-boolean', result: false },
      { input: { label: 123 }, select: 'ul > li > div', result: false },
      { input: { label: false }, select: 'ul > li > chll-input-string', result: false },
      { input: { label: false }, select: 'ul > li > chll-input-number', result: false },
      { input: { label: false }, select: 'ul > li > chll-input-boolean', result: true },
      { input: { label: false }, select: 'ul > li > div', result: false },
    ].forEach(testcase => {
      component.value = testcase.input;
      fixture.detectChanges();

      const nodeElement: HTMLElement = fixture.nativeElement;
      const chllInputElement = nodeElement.querySelector(testcase.select);
      expect(chllInputElement !== null).toEqual(testcase.result);
    });
  });

  it('inner node element and a label are displayed for inputs of type object', () => {
    component.value = { labeltext: {} };
    fixture.detectChanges();

    const nodeElement: HTMLElement = fixture.nativeElement;
    const divElement = nodeElement.querySelector('ul > li > div');
    expect(divElement !== null).toEqual(true);

    const labelElement = nodeElement.querySelector('ul > li > div > label');
    expect(labelElement !== null).toEqual(true);
    expect(labelElement.textContent).toEqual('labeltext:');

    const innerNodeElement = nodeElement.querySelector('ul > li > div > chll-node');
    expect(innerNodeElement !== null).toEqual(true);
  });
});
