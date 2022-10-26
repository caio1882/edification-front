import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBlogsComponent } from './cards-blogs.component';

describe('CardsBlogsComponent', () => {
  let component: CardsBlogsComponent;
  let fixture: ComponentFixture<CardsBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
