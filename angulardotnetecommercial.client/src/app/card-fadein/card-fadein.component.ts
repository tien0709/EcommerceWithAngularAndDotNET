import { Component, QueryList, ViewChildren, AfterViewInit, HostListener } from '@angular/core';
import { Iproduct } from '../shared/models/Product';
import { CardFadeInService } from './card-fadein.service';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-card-fadein',
    templateUrl: './card-fadein.component.html',
    styleUrls: ['./card-fadein.component.css']
})
export class CardFadeinComponent implements AfterViewInit {
    @ViewChildren('fadeElement') cards: QueryList<ElementRef> | null = null;
    products: Iproduct[] = [];

    constructor(private cardfadeinService: CardFadeInService) { }

    ngOnInit(): void {
        this.cardfadeinService.getProducts().subscribe((response: Iproduct[]) => {
            this.products = response;
            console.log(response);
            response.forEach(product => {
            });
        });
    }

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
    }
}
