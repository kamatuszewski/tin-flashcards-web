import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQuestionTypeComponent } from './text-question-type.component';

describe('TextQuestionTypeComponent', () => {
  let component: TextQuestionTypeComponent;
  let fixture: ComponentFixture<TextQuestionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextQuestionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
