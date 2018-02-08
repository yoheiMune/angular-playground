import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ValidationComponent } from './page/validation/validation.component';

const appRoutes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'validation', component : ValidationComponent },
  { path : '', redirectTo : '/home', pathMatch : 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValidationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
