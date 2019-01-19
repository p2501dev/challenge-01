import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputStringComponent } from './input-string.component';

describe('InputStringComponent', () => {
  let component: InputStringComponent;
  let fixture: ComponentFixture<InputStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputStringComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
