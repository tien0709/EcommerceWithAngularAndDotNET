import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PublicService } from '../../services/public.service';
import { Iproduct } from '../../../../data/models/Iproduct';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
    @Input() name: string = ""
    @Input() description: string = ""
    @Input() price: string = ""
    @Input() srcImg: string = ""
    @Input() id: string = ""
    @ViewChildren('productElement') cards: QueryList<ElementRef> | null = null;

    constructor(private cartService: CartService, private publicService: PublicService, private toastr: ToastrService) { }
    public addToCart() {
        // Thêm sản phẩm vào giỏ hàng
        this.publicService.addItemToCart(this.id).subscribe(
            (response: any) => {
                this.publicService.getCart().subscribe((response: any) => {
                    this.cartService.updateCartItemCount(response.items.length);
                });
                this.success();
            },(error: Error) => {
                console.error('Error adding item to cart', error);
            }
        );
    }

    success(): void {
        this.toastr.success('', 'Thêm vào giỏ hàng thành công');
    }
}
