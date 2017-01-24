import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BetaComponent } from './beta/beta.component';
import { BetaSignupComponent } from './beta/beta-signup/beta-signup.component';
import { BetaSuccessComponent } from './beta/beta-success/beta-success.component';
import { routing } from './app.routing';
import { LoginGuardService } from './shared/login-guard.service';
import { BetaGuardService } from './shared/beta-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BetaComponent,
    BetaSignupComponent,
    BetaSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginGuardService, BetaGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
