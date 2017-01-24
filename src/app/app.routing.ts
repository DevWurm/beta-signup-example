import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BetaComponent } from './beta/beta.component';
import { LoginComponent } from './login/login.component';
import { BetaSignupComponent } from './beta/beta-signup/beta-signup.component';
import { BetaSuccessComponent } from './beta/beta-success/beta-success.component';
import { LoginGuardService } from './shared/login-guard.service';
import { BetaGuardService } from './shared/beta-guard.service';
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'beta', component: BetaComponent, canActivate: [BetaGuardService], children: [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path: 'signup', component: BetaSignupComponent},
    {path: 'success', component: BetaSuccessComponent}
  ]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);