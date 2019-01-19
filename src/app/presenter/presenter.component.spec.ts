import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterComponent } from './presenter.component';
import { NodeComponent } from './node/node.component';

describe('PresenterComponent', () => {
  let component: PresenterComponent;
  let fixture: ComponentFixture<PresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresenterComponent, NodeComponent],
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
