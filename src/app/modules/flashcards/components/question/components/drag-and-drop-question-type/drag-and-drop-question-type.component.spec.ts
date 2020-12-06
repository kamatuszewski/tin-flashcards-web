import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropQuestionTypeComponent } from './drag-and-drop-question-type.component';

describe('DragAndDropQuestionTypeComponent', () => {
  let component: DragAndDropQuestionTypeComponent;
  let fixture: ComponentFixture<DragAndDropQuestionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropQuestionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropQuestionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
