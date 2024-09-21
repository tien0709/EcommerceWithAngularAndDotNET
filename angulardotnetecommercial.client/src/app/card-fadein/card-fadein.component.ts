import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'app-card-fadein',
    templateUrl: './card-fadein.component.html',
    styleUrls: ['./card-fadein.component.css']
})
export class CardFadeinComponent implements OnInit {
    @ViewChild('fadeElement') card: ElementRef|null=null;
    @Input() name: string = "";
    @Input() srcImg: string = "";
    @Input() description: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    @HostListener('window:scroll', [])
    onScroll() {
        this.checkVisibility();
    }

    checkVisibility() {
        const rect = this.card?.nativeElement.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0) {
            this.card?.nativeElement.classList.add('in-view');
            this.card?.nativeElement.classList.remove('out-view');
        } else {
            this.card?.nativeElement.classList.remove('in-view'); // Bỏ lớp nếu không còn trong viewport
            this.card?.nativeElement.classList.add('out-view'); // Bỏ lớp nếu không còn trong viewport
        }
    }
}

