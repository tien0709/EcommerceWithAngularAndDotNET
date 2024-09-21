import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShipperParallaxComponent } from './shipper-parallax/shipper-parallax.component';
import { CardRotateComponent } from './card-rotate/card-rotate.component';
import { CardFadeinComponent } from './card-fadein/card-fadein.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShipperParallaxComponent,
    CardRotateComponent,
    CardFadeinComponent,
    CardPricingComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
      BrowserAnimationsModule,
     FontAwesomeModule
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
