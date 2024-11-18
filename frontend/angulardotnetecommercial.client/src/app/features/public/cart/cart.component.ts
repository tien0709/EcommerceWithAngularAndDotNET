import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IcartItem } from '../../../data/models/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    carts: IcartItem[] = []

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getCartItems();
    }

    getCartItems() {
        this.http.get<IcartItem[]>('/api/carts').subscribe({
            next: (response: IcartItem[]) => {
                this.carts = response;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                //console.log('Request completed');
            }
        });
    }
}
