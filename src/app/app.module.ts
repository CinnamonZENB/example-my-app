import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { IntroComponent } from './component/intro/intro.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContentComponent } from './component/content/content.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { FooterComponent } from './component/footer/footer.component';
import { ClientsComponent } from './component/clients/clients.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { HeaderComponent } from './component/header/header.component';
import { SocialComponent } from './component/social/social.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    FooterComponent,
    ClientsComponent,
    PricingComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    ToolbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
