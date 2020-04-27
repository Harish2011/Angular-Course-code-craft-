import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmetListComponent } from './departmet-list.component';

describe('DepartmetListComponent', () => {
  let component: DepartmetListComponent;
  let fixture: ComponentFixture<DepartmetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
