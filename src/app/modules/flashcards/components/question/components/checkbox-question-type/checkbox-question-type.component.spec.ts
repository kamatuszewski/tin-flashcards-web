import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxQuestionTypeComponent } from './checkbox-question-type.component';

describe('CheckboxQuestionTypeComponent', () => {
  let component: CheckboxQuestionTypeComponent;
  let fixture: ComponentFixture<CheckboxQuestionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxQuestionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
