import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { ClassWebsiteComponent } from './components/class-website/class-website.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ValidateService} from './services/validate.service';
import { AuthService} from './services/auth.service';
import { AuthGuard} from './guards/auth.guard';
import {FlashMessagesModule} from 'angular2-flash-messages';

const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'blackjack', component:BlackjackComponent},
{path:'classWebsite', component:ClassWebsiteComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]} //AuthGuard for authorization checks
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    BlackjackComponent,
    ClassWebsiteComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
