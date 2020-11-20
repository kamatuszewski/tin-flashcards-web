import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioQuestionTypeComponent } from './radio-question-type.component';

describe('RadioQuestionTypeComponent', () => {
  let component: RadioQuestionTypeComponent;
  let fixture: ComponentFixture<RadioQuestionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioQuestionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
