import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputBooleanComponent } from './input-boolean.component';

describe('InputBooleanComponent', () => {
  let component: InputBooleanComponent;
  let fixture: ComponentFixture<InputBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputBooleanComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleCheckbox() inverts the value', () => {
    [{ input: true, result: false }, { input: false, result: true }].forEach(testcase => {
      component.value = testcase.input;

      expect(component).toBeDefined();
      expect(component.value).toEqual(testcase.input);

      component.toggleCheckbox();

      expect(component.value).toEqual(testcase.result);
    });
  });

  it('input parameter is bound to the input of type checkbox', async(async () => {
    const nodeElement: any = fixture.nativeElement;
    component.value = true;
    fixture.detectChanges();

    const inputCheckboxElement = nodeElement.querySelector('div > input');
    expect(inputCheckboxElement !== null).toEqual(true);

    await fixture.whenStable();
    expect(inputCheckboxElement.checked).toEqual(true);
  }));

  it('click on label should toggle checkbox', async(async () => {
    const spyToggleCheckbox = spyOn(component, 'toggleCheckbox').and.callThrough();
    const nodeElement: HTMLElement = fixture.nativeElement;
    component.value = true;
    fixture.detectChanges();

    const inputCheckboxElement = nodeElement.querySelector<HTMLElement>('div > input');
    expect(inputCheckboxElement !== null).toEqual(true);

    const labelElement = nodeElement.querySelector<HTMLElement>('div > label');
    expect(labelElement !== null).toEqual(true);

    labelElement.click();

    fixture.detectChanges();
    await fixture.whenStable();
    expect(spyToggleCheckbox).toHaveBeenCalled();
    expect((inputCheckboxElement as any).checked).toEqual(false);
  }));

  it('click on svg should toggle checkbox', async(async () => {
    const spyToggleCheckbox = spyOn(component, 'toggleCheckbox').and.callThrough();
    const nodeElement: HTMLElement = fixture.nativeElement;
    component.value = true;
    fixture.detectChanges();

    const inputCheckboxElement = nodeElement.querySelector<HTMLElement>('div > input');
    expect(inputCheckboxElement !== null).toEqual(true);

    const svgElement = nodeElement.querySelector<HTMLElement>('div > svg');
    expect(svgElement !== null).toEqual(true);

    svgElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(spyToggleCheckbox).toHaveBeenCalled();
    expect((inputCheckboxElement as any).checked).toEqual(false);
  }));

  it('svg path is only shown when checkbox is checked', () => {
    const nodeElement: HTMLElement = fixture.nativeElement;
    [{ input: true, result: true }, { input: false, result: false }].forEach(testcase => {
      component.value = testcase.input;
      fixture.detectChanges();

      const svgElement = nodeElement.querySelector<HTMLElement>('div > svg > path');
      expect(svgElement !== null).toEqual(testcase.result);
    });
  });
});
