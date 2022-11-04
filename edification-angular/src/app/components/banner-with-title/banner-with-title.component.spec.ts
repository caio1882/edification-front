import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWithTitleComponent } from './banner-with-title.component';

describe('BannerWithTitleComponent', () => {
  let component: BannerWithTitleComponent;
  let fixture: ComponentFixture<BannerWithTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerWithTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
