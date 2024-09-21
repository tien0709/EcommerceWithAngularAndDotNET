import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shipper-parallax',
  templateUrl: './shipper-parallax.component.html',
    styleUrls: ['./shipper-parallax.component.css']
})
export class ShipperParallaxComponent implements OnInit {
    constructor(private renderer: Renderer2) { }
    ngOnInit(): void {
        this.renderer.listen('window', 'scroll', () => {
            const parallax = document.querySelector('.shipper-parallax') as HTMLElement;
            let scrollPosition = document.documentElement.scrollTop;
            // Sử dụng template literals để tạo chuỗi
                parallax.style.transform = `translate(-${scrollPosition * 0.05}rem, 0)`;

        });
    }
}
