import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputNumberComponent } from './input-number.component';

describe('InputNumberComponent', () => {
  let component: InputNumberComponent;
  let fixture: ComponentFixture<InputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputNumberComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increment() should increase the value by 1', () => {
    [{ input: 1, result: 2 }, { input: -1, result: 0 }].forEach(testcase => {
      component.value = testcase.input;

      expect(component).toBeDefined();
      expect(component.value).toEqual(testcase.input);

      component.increment();

      expect(component.value).toEqual(testcase.result);
    });
  });

  it('decrement() should decrease the value by 1', () => {
    [{ input: 2, result: 1 }, { input: 0, result: -1 }].forEach(testcase => {
      component.value = testcase.input;

      expect(component).toBeDefined();
      expect(component.value).toEqual(testcase.input);

      component.decrement();

      expect(component.value).toEqual(testcase.result);
    });
  });

  it('input parameter is bound to the input of type checkbox', async(async () => {
    const nodeElement: any = fixture.nativeElement;
    component.value = 1;
    fixture.detectChanges();

    const inputNumberElement = nodeElement.querySelector('div > div > input');
    expect(inputNumberElement !== null).toEqual(true);

    await fixture.whenStable();
    expect(inputNumberElement.value).toEqual('1');
  }));

  it("click on svg 'plus' should increase input value by 1", async(async () => {
    const spyIncrement = spyOn(component, 'increment').and.callThrough();
    const nodeElement: HTMLElement = fixture.nativeElement;
    component.value = 1;
    fixture.detectChanges();

    const inputNumberElement = nodeElement.querySelector<HTMLElement>('div > div > input');
    expect(inputNumberElement !== null).toEqual(true);

    const svgElement = nodeElement.querySelector<HTMLElement>('#plus');
    expect(svgElement !== null).toEqual(true);

    svgElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(spyIncrement).toHaveBeenCalled();
    expect((inputNumberElement as any).value).toEqual('2');
  }));

  it("click on svg 'minus' should decrease input value by 1", async(async () => {
    const spyDecrement = spyOn(component, 'decrement').and.callThrough();
    const nodeElement: HTMLElement = fixture.nativeElement;
    component.value = 1;
    fixture.detectChanges();

    const inputNumberElement = nodeElement.querySelector<HTMLElement>('div > div > input');
    expect(inputNumberElement !== null).toEqual(true);

    const svgElement = nodeElement.querySelector<HTMLElement>('#minus');
    expect(svgElement !== null).toEqual(true);

    svgElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(spyDecrement).toHaveBeenCalled();
    expect((inputNumberElement as any).value).toEqual('0');
  }));
});
