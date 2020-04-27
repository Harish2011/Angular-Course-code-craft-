import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmetContactComponent } from './departmet-contact.component';

describe('DepartmetContactComponent', () => {
  let component: DepartmetContactComponent;
  let fixture: ComponentFixture<DepartmetContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmetContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmetContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
