import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBooleanComponent } from './input-boolean.component';
import { FormsModule } from '@angular/forms';

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
});
