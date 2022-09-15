import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserService } from './services/user.service';
const appRoutes: Routes = [
  {
    path: 'add-property',
    component: AddPropertyComponent,
  },
  {
    path: '',
    component: PropertyListComponent,
  },
  {
    path: 'rent-property',
    component: PropertyListComponent,
  },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent,
  },
  {
    path: 'user/login',
    component: UserLoginComponent,
  },
  {
    path: 'user/register',
    component: UserRegistrationComponent,
  },
  {
    path: '**',
    component: PropertyListComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    CarouselComponent,
    PropertyDetailComponent,
    UserRegistrationComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HousingService, CarouselComponent,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
