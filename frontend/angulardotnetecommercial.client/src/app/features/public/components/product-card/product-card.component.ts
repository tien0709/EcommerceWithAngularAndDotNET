import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

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
    @ViewChildren('productElement') cards: QueryList<ElementRef> | null = null;
}
