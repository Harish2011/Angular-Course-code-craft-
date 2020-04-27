import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormsValidationComponent } from './model-driven-forms-validation.component';

describe('ModelDrivenFormsValidationComponent', () => {
  let component: ModelDrivenFormsValidationComponent;
  let fixture: ComponentFixture<ModelDrivenFormsValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenFormsValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
