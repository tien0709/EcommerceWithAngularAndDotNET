import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'app-card-rotate',
    templateUrl: './card-rotate.component.html',
    styleUrls: ['./card-rotate.component.css']
})
export class CardRotateComponent implements OnInit {
    @Input() name: string = "";
    @Input() srcImg = "";
    @Input() description: string = "";
    @ViewChild('RotateAndFadeElement') card: ElementRef|null=null;
    constructor(private renderer: Renderer2) {
    }
    ngOnInit(): void {
    }

    ngAfterViewInit() {
        const cardElement = this.card?.nativeElement;
        this.renderer.listen(cardElement, 'mousemove', (e) => {
            const rect = cardElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / centerY * 20;
            const rotateY = (x - centerX) / centerX * 20;
            this.card?.nativeElement.classList.add('can-hover');//to prevent conflict animation
            this.renderer.setStyle(cardElement, 'transform', `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        });
        this.renderer.listen(cardElement, 'mouseleave', (e) => {
            this.renderer.setStyle(cardElement, 'transform', 'rotateX(0deg) rotateY(0deg)');
        });
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
            this.card?.nativeElement.classList.remove('can-hover');//to prevent conflict animation
        }
    }
   
}
