import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCoursesComponent } from './cards-courses.component';

describe('CardsCoursesComponent', () => {
  let component: CardsCoursesComponent;
  let fixture: ComponentFixture<CardsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
