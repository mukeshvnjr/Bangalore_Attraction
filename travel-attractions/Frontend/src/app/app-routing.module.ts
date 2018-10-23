import {NgModule} from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './include/home/home.component';
import { AboutComponent } from './include/about/about.component';
import { ContactUsComponent } from './include/contact-us/contact-us.component';
import { UserhomeComponent } from './include/userhome/userhome.component';
import { CommentsComponent } from './attraction-place/comments/comments.component';
import { AttractionplaceComponent } from './attraction-place/attractionplace/attractionplace.component';
import { AttractionListPageComponent } from './attraction-place/attraction-list-page/attraction-list-page.component';
import { AttractionDetailsComponent } from './attraction-place/attraction-details/attraction-details.component';
import { AttractionEditComponent } from './attraction-place/attraction-edit/attraction-edit.component';
import { CarouselComponent } from './include/carousel/carousel.component';
import {AttractionsComponent} from './attraction-place/attractions/attractions.component';

const routers: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'carousel', component: CarouselComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user', component: UserhomeComponent},
  {path: 'attraction-details', component: AttractionDetailsComponent},
  {path: 'attraction', component: AttractionplaceComponent},

  {path: 'attraction/:id', component: AttractionsComponent},
  {path: 'comments/:id', component: CommentsComponent},
  {path: 'attraction-edit/:id', component: AttractionEditComponent},
  {path: 'contact-us', component: ContactUsComponent},

  // {path: 'attraction-details', component: AttractionDetailsComponent,
  //     children:[
  //       {path: 'add-attraction', component: AttractionplaceComponent},
  //     ]
  // },

  {path: 'attractionlist', component: AttractionListPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routers)], // <-- debugging purposes only
  exports: [RouterModule]
})

export class AppRoutingModule {
}
