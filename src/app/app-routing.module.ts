import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: LandingPageComponent,
  },
  {
    path: 'registration',
    title: 'Registration',
    component: RegistrationPageComponent,
  },
  { path: 'random', title: 'Login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
