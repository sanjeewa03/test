import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Homepage/home/home.component';
import { CoreComponent } from './Homepage/core/core.component';
import { NavbarComponent } from './Homepage/core/navbar/navbar.component';
import { FooterComponent } from './Homepage/core/footer/footer.component';
import { BannerComponent } from './Homepage/banner/banner.component';
import { ViewComponent } from './Homepage/view/view.component';
import { ContactComponent } from './Homepage/contact/contact.component';
import { AboutusComponent } from './Homepage/aboutus/aboutus.component';
import { SignInComponent } from './Homepage/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ViewComponent,
    ContactComponent,
    AboutusComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
