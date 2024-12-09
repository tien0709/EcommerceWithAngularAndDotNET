import { Component } from '@angular/core';
import { Iproduct } from '../../../../../data/models/Iproduct';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ICategory } from '../../../../../data/models/ICategory';

@Component({
  selector: 'app-add-product-management',
  templateUrl: './add-product-management.component.html',
  styleUrl: './add-product-management.component.css'
})
export class AddProductManagementComponent {
    id: string | null = null;
    products: Iproduct[] = [];
    imageUrl: string = '';
    name: string = '';
    description: string = '';
    categories: ICategory[] = [];
    categoryId: string = '';
    price: number = 0;
    quantity: number = 0;
    message$ = this.messageService.message$;
    errorMessage: string = "";

    constructor(
        private publicService: PublicService,
        private messageService: MessageService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.publicService.getCategories().subscribe((response: ICategory[]) => {
            this.categories = response;
            console.log(this.categories);
        });
    }

    onSubmit(uploadForm: NgForm): void {
        if (uploadForm.valid) {
            const newProduct = {
                name: this.name,
                imageUrl: this.imageUrl,
                price: this.price,
                description: this.description,
                categoryId: this.categoryId,
                quantity: this.quantity
            };

            this.publicService.addProduct(newProduct).subscribe(response => {
                this.messageService.showMessage('Thêm thành công');
                this.router.navigate(['/admin/products']);
            }, error => {
                console.log(error);
                this.errorMessage = error.error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
            });
        } else {
            this.errorMessage = 'Vui lòng điền đầy đủ thông tin.';
        }
    }
}
