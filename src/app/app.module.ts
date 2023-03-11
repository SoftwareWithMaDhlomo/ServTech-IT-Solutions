import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HighlightsComponent } from './components/highlights/highlights.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ServicesPageComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    CardComponent,
    WelcomeComponent,
    HighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
