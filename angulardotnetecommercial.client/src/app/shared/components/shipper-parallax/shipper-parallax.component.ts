import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shipper-parallax',
  templateUrl: './shipper-parallax.component.html',
    styleUrls: ['./shipper-parallax.component.css']
})
export class ShipperParallaxComponent implements OnInit {
    constructor(private renderer: Renderer2) { }
    ngOnInit(): void {
        let prevScrollPosition = document.documentElement.scrollTop;
        let isScrollingDown = true;

        this.renderer.listen('window', 'scroll', () => {
            const parallax = document.querySelector('.shipper-parallax') as HTMLElement;
            const parallaxContainer = document.querySelector('.shipper-parallax-container') as HTMLElement;
            // dùng hai phân tử như này để scaleX(-1) thì chỉ đổi hướng của ảnh mà không đổi chiều chuyển động
            if (parallax && parallaxContainer) {
                let currentScrollPosition = document.documentElement.scrollTop;

                // Di chuyển parallax container
                parallaxContainer.style.transform = `translateX(-${currentScrollPosition * 0.05}rem)`;

                // Kiểm tra hướng cuộn và áp dụng scale cho parallax
                if (currentScrollPosition > prevScrollPosition) {
                    if (!isScrollingDown) {
                        parallax.style.transform = '';
                        isScrollingDown = true;
                    }
                } else if (currentScrollPosition < prevScrollPosition) {
                    if (isScrollingDown) {
                        parallax.style.transform = 'scaleX(-1)';
                        isScrollingDown = false;
                    }
                }

                prevScrollPosition = currentScrollPosition;
            }
        });
    }
}
