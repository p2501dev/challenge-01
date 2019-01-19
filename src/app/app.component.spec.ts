import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PresenterComponent } from './presenter/presenter.component';
import { NodeComponent } from './presenter/node/node.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, PresenterComponent, NodeComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
