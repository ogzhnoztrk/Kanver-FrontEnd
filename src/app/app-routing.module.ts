import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BloodPointsComponent } from './components/blood-points/blood-points.component';

import { ProfileComponent } from './components/profile/profile.component';
import { ComplaintComponent } from './components/complaint/complaint.component';

import { FaqComponent } from './components/faq/faq.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },  
  {
    path:'faq',
    component: FaqComponent
  },
  {
    path:'complaint',
    component: ComplaintComponent
  },
  {
    path:'profile/:id',
    component: ProfileComponent
  },
  {
    path:'blood-points',
    component: BloodPointsComponent
  },
  {
    path:'login/forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'register/success',
    component: RegisterSuccessComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
