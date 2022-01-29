import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FaqComponent } from './components/faq/faq.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BloodPointsComponent } from './components/blood-points/blood-points.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AboutComponent } from './components/about/about.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FaqComponent,
    ComplaintComponent,
    ProfileComponent,
    BloodPointsComponent,
    ForgotPasswordComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
