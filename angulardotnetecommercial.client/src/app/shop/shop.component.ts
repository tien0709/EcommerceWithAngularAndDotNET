import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/models/Product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
    public products: Iproduct[] = [];

    constructor(private shopService: ShopService) { }

    ngOnInit() {
        this.shopService.getProducts();
    }
}
