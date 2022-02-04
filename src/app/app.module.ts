import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

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
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    
    RegisterSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [UserService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
 