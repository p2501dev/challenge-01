import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PresenterComponent } from './presenter/presenter.component';
import { NodeComponent } from './presenter/components/node/node.component';
import { InputBooleanComponent } from './presenter/components/input-boolean/input-boolean.component';
import { InputNumberComponent } from './presenter/components/input-number/input-number.component';
import { InputStringComponent } from './presenter/components/input-string/input-string.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PresenterComponent,
        NodeComponent,
        InputBooleanComponent,
        InputNumberComponent,
        InputStringComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
