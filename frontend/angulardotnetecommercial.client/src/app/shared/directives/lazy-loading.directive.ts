import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
    selector: '[lazyLoadObserver]'
})
export class LazyLoadObserverDirective implements OnInit, OnDestroy {
    @HostBinding('class.visible') isVisible = false;
    @Input() threshold: number = 0.1;
    private observer!: IntersectionObserver;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.isVisible = entry.isIntersecting;
            });
        }, {
            threshold: this.threshold
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
