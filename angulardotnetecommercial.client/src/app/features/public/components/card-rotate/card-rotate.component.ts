import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef} from '@angular/core';

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
            this.renderer.setStyle(cardElement, 'transform', `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        });
        this.renderer.listen(cardElement, 'mouseleave', (e) => {
            this.renderer.setStyle(cardElement, 'transform', 'rotateX(0deg) rotateY(0deg)');
        });
    }
}
