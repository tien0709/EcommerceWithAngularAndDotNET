import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-card-slider-menu',
  templateUrl: './card-slider-menu.component.html',
  styleUrl: './card-slider-menu.component.css'
})
export class CardSliderMenuComponent {
    @Input() name: string = ""
    @Input() description: string = ""
    @Input() price: string = ""
    @Input() srcImg: string = ""
    @ViewChildren('sliderElement') cards: QueryList<ElementRef> | null = null;
    //products: Iproduct[] = [];

    constructor(/*private cardfadeinService: CardFadeInService*/) { }

    ngOnInit(): void {
        /*this.cardfadeinService.getProducts().subscribe((response: Iproduct[]) => {
            this.products = response;
            console.log(response);
            response.forEach(product => {
            });
        });*/
    }
}
