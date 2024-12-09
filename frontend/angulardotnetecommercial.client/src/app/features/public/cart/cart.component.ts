import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IcartItem } from '../../../data/models/ICartItem';
import { PublicService } from '../services/public.service';
import { Icart } from '../../../data/models/ICart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    cartItems: IcartItem[] = []
    quantity: number = 0;
    total: GLfloat = 0;
    cartItemsString: string =""

    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.publicService.getCart().subscribe((response: any) => {
            this.cartItems = response.items

            for (let item of this.cartItems) {
                this.quantity += item.quantity;
                this.total += item.quantity * item.product.price;
            }// bỏ for ngoài là chạy song song đó
            this.cartItemsString = JSON.stringify(this.cartItems);
        });
    }
}
