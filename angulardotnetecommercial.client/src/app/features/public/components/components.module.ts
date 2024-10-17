import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { CardSliderMenuComponent } from './card-slider-menu/card-slider-menu.component';
import { CardRotateComponent } from './card-rotate/card-rotate.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';
import { CardFadeinComponent } from './card-fadein/card-fadein.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
    imports: [
        GoogleMapsModule,
        CommonModule
    ],
    declarations: [
        CardFadeinComponent,
        CardPricingComponent,
        CardRotateComponent,
        CardSliderMenuComponent,
        BlogCardComponent,
        GooglemapComponent],
  exports: [
        CardFadeinComponent,
        CardPricingComponent,
        CardRotateComponent,
        CardSliderMenuComponent,
        BlogCardComponent,
        GooglemapComponent
   ]
})
export class ComponentsModule { }
