import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { PublicComponent } from './public.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from '../../core/authentication/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },

            {
                path: 'blogs', component: BlogComponent,
            },

            {
                path: 'about', component: AboutComponent,
            },

            {
                path: 'contact', component: ContactComponent,
            },

            {
                path: 'products', component: ProductComponent,
            },
            {
                path: 'cart', component: CartComponent, canActivate: [AuthGuard],
            },
            {
                path: 'checkout', component: CheckoutComponent,
            },
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
