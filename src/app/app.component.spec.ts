import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { NodeComponent } from './node/node.component';
import { InputBooleanComponent } from './node/components/input-boolean/input-boolean.component';
import { InputNumberComponent } from './node/components/input-number/input-number.component';
import { InputStringComponent } from './node/components/input-string/input-string.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NodeComponent,
        InputBooleanComponent,
        InputNumberComponent,
        InputStringComponent,
        FormComponent,
        HeaderComponent,
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
