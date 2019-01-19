import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PresenterComponent } from './presenter.component';
import { NodeComponent } from './components/node/node.component';
import { InputBooleanComponent } from './components/input-boolean/input-boolean.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputStringComponent } from './components/input-string/input-string.component';

describe('PresenterComponent', () => {
  let component: PresenterComponent;
  let fixture: ComponentFixture<PresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PresenterComponent,
        NodeComponent,
        InputBooleanComponent,
        InputNumberComponent,
        InputStringComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
