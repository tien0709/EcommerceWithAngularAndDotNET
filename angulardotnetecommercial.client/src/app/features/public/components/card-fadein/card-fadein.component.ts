import { Component, QueryList, ViewChildren, AfterViewInit, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Iproduct } from '../../../../data/models/Iproduct';
import { CardFadeInService } from '../../services/card-fadein.service';

@Component({
    selector: 'app-card-fadein',
    templateUrl: './card-fadein.component.html',
    styleUrls: ['./card-fadein.component.css']
})
export class CardFadeinComponent {
    products: Iproduct[] = [];

    constructor(private cardfadeinService: CardFadeInService) { }

    ngOnInit(): void {
        this.cardfadeinService.getProducts().subscribe((response: Iproduct[]) => {
            this.products = response;
            console.log(response);
            this.products.forEach(product => {
                console.log(product);
            });
        });
    }
   /* @ViewChildren('fadeElement') cards: QueryList<ElementRef> | null = null;

    ngAfterViewInit(): void {
        // Wait for the view to be initialized and then check visibility
        console.log('Cards after view init:', this.cards);
        this.checkVisibility();
    }

    @HostListener('window:scroll', [])
    onScroll() {
        if (this.cards) {
            this.checkVisibility();
        }
    }

    checkVisibility() {
        // Ensure `cards` is available before checking
        if (this.cards) {
            this.cards.forEach((card: ElementRef) => {
                if (card && card.nativeElement) {
                    const rect = card.nativeElement.getBoundingClientRect();
                    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.bottom >= 0) {
                        card.nativeElement.classList.add('in-view');
                        card.nativeElement.classList.remove('out-view');
                    } else {
                        card.nativeElement.classList.remove('in-view');
                        card.nativeElement.classList.add('out-view');
                    }
                } else {
                    console.warn('Card element not found or is undefined');
                }
            });
        } else {
            console.warn('Cards QueryList is empty or undefined');
        }
    }*/
}
