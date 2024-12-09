import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';
import { BlogModule } from './blog/blog.module';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AboutModule } from './about/about.module';
import { Iproduct } from '../../data/models/Iproduct';
import { SharedModule } from '../../shared/shared.module';
import { ProductModule } from './product/product.module';

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        ProductModule,
        AboutModule,
        BlogModule,
        CartModule,
        CheckoutModule,
        ContactModule,
        HomeModule,
        SharedModule
    ],
  declarations: [
      PublicComponent
  ],
    exports: [
    ]
})
export class PublicModule {

}
