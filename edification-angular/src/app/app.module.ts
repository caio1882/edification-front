import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerWithTitleComponent } from './components/banner-with-title/banner-with-title.component';
import { CardsCoursesComponent } from './components/cards-courses/cards-courses.component';
import { ContainerVideoComponent } from './components/container-video/container-video.component';
import { CardsFeedbackComponent } from './components/cards-feedback/cards-feedback.component';
import { CardsSmallComponent } from './components/cards-small/cards-small.component';
import { BannerCommentsComponent } from './components/banner-comments/banner-comments.component';
import { CardsBlogsComponent } from './components/cards-blogs/cards-blogs.component';
import { FooterInfoComponent } from './components/footer-info/footer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerWithTitleComponent,
    CardsCoursesComponent,
    ContainerVideoComponent,
    CardsFeedbackComponent,
    CardsSmallComponent,
    BannerCommentsComponent,
    CardsBlogsComponent,
    FooterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
