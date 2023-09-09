import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './component/intro/intro.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContentComponent } from './component/content/content.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { ClientsComponent } from './component/clients/clients.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Content', component: ContentComponent },
  { path: 'Testimonials', component: TestimonialComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Pricing', component: PricingComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
