import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmetOverviewComponent } from './departmet-overview.component';

describe('DepartmetOverviewComponent', () => {
  let component: DepartmetOverviewComponent;
  let fixture: ComponentFixture<DepartmetOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmetOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
