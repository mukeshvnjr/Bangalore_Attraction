import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule, MDBBootstrapModule , WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { StarRatingModule } from 'angular-star-rating';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'

import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './include/home/home.component';
import { FooterComponent } from './include/footer/footer.component';
import { HeaderComponent } from './include/header/header.component';
import { AboutComponent } from './include/about/about.component';
import { ContactUsComponent } from './include/contact-us/contact-us.component';
import { AboutMainPageComponent } from './include/about-main-page/about-main-page.component';
import { AttractionReviewComponent } from './include/attraction-review/attraction-review.component';
import { UserhomeComponent } from './include/userhome/userhome.component';
import { UserService } from './services/user.service';
import { AttractionService } from './services/attraction.service';
import { CommentsComponent } from './attraction-place/comments/comments.component';
import { AttractionplaceComponent } from './attraction-place/attractionplace/attractionplace.component';
import { AttractionListPageComponent } from './attraction-place/attraction-list-page/attraction-list-page.component';
import { AttractionDetailsComponent } from './attraction-place/attraction-details/attraction-details.component';
import { TestComponent } from './test/test.component';
import { AttractionEditComponent } from './attraction-place/attraction-edit/attraction-edit.component';
import { CarouselComponent } from './include/carousel/carousel.component';
import { AttractionsComponent } from './attraction-place/attractions/attractions.component';
import {AuthService} from './services/auth.service';
import { StarRatingComponent } from './attraction-place/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ContactUsComponent,
    AboutMainPageComponent,
    AttractionReviewComponent,
    UserhomeComponent,
    CommentsComponent,
    AttractionplaceComponent,
    AttractionListPageComponent,
    AttractionDetailsComponent,
    TestComponent,
    AttractionEditComponent,
    CarouselComponent,
    AttractionsComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''}),
    AgmDirectionModule,
    HttpClientModule,
    CarouselModule, MDBBootstrapModule , WavesModule, ButtonsModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    UserService, AttractionService, AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
