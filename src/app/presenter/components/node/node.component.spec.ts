import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NodeComponent } from './node.component';
import { InputBooleanComponent } from '../input-boolean/input-boolean.component';
import { InputNumberComponent } from '../input-number/input-number.component';
import { InputStringComponent } from '../input-string/input-string.component';

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
});
