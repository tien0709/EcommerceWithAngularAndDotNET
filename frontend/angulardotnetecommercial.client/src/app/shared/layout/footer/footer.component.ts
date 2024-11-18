import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Nhập biểu tượng Facebook

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    public faFacebook: IconDefinition = faFacebook;
    public faTiktok: IconDefinition = faTiktok;
    public faInstagram: IconDefinition = faInstagram;
}
