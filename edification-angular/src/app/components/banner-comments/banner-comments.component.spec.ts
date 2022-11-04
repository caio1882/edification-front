import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCommentsComponent } from './banner-comments.component';

describe('BannerCommentsComponent', () => {
  let component: BannerCommentsComponent;
  let fixture: ComponentFixture<BannerCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
