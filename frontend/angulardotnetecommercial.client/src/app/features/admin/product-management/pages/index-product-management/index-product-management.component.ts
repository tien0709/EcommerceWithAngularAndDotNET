import { Component } from '@angular/core';
import { Iproduct } from '../../../../../data/models/Iproduct';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index-product-management',
  templateUrl: './index-product-management.component.html',
  styleUrl: './index-product-management.component.css'
})
export class IndexProductManagementComponent {
    products: Iproduct[] = [];
    message$ = this.messageService.message$;
    errorMessage: string = "";
    constructor(private publicService: PublicService, private messageService: MessageService, private router: Router) { }

    ngOnInit(): void {
        this.publicService.getProducts().subscribe((response: Iproduct[]) => {
            this.products = response;  
            console.log(response);
        })
    }

    deleteProduct(productId: string): void {
        this.publicService.deleteProduct(productId).subscribe((response: any) => {
            this.messageService.showMessage('xóa thành công');
            //reload page
            const currentUrl = this.router.url;
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([currentUrl]);
            });
        }, error => {
            console.log(error);
            this.errorMessage = error.error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
        });
    }
}
