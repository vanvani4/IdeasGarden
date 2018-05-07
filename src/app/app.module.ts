import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MaterialModule } from './material/material.module';
import { MainPageModule } from './main/main-page.module';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthGuardService } from './guard/auth-guard.service';
import { AdminGuard } from './guard/admin.guard';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module'



const appRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MainPageModule,
    AdminModule
  ],
  providers: [AuthenticationGuard, AuthGuardService, AdminGuard, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
