import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShipperParallaxComponent } from './shipper-parallax/shipper-parallax.component';
import { CardRotateComponent } from './card-rotate/card-rotate.component';
import { CardFadeinComponent } from './card-fadein/card-fadein.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';
import { CardSliderMenuComponent } from './card-slider-menu/card-slider-menu.component'
import { CoreModule } from './core/core.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipperParallaxComponent,
    CardRotateComponent,
    CardFadeinComponent,
    CardPricingComponent,
    CardSliderMenuComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
