import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFeedbackComponent } from './cards-feedback.component';

describe('CardsFeedbackComponent', () => {
  let component: CardsFeedbackComponent;
  let fixture: ComponentFixture<CardsFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
