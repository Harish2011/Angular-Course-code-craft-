import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactWithRxjsComponent } from './react-with-rxjs.component';

describe('ReactWithRxjsComponent', () => {
  let component: ReactWithRxjsComponent;
  let fixture: ComponentFixture<ReactWithRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactWithRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
