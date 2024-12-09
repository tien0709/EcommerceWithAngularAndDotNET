import { Component } from '@angular/core';
import { Iproduct } from '../../../../../data/models/Iproduct';
import { ICategory } from '../../../../../data/models/ICategory';
import { PublicService } from '../../../../public/services/public.service';
import { MessageService } from '../../../../../core/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product-management',
  templateUrl: './edit-product-management.component.html',
  styleUrl: './edit-product-management.component.css'
})
export class EditProductManagementComponent {
    id: string | null = null;
    product: Iproduct| null = null;
    imageUrl: string = '';
    name: string = '';
    description: string = '';
    quantity: number = 0;
    price: number = 0;
    categories: ICategory[] = [];
    categoryId: string = '';
    message$ = this.messageService.message$;
    errorMessage: string = "";

    constructor(
        private publicService: PublicService,
        private messageService: MessageService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); // Lấy giá trị của tham số 'id'
        });
    }

    ngOnInit(): void {
        this.publicService.getCategories().subscribe((response: ICategory[]) => {
            this.categories = response;
            console.log(this.categories);
        });

        this.publicService.getProduct(this.id!).subscribe((response: Iproduct) => {
            this.product = response;

            if (this.product != null) {
                this.name = this.product.name;
                this.price = this.product.price;
                this.id = this.product.id;
                this.imageUrl = this.product.imageUrl;
                this.description = this.product.description;
                this.quantity = this.product.quantity;
                this.categoryId = this.product.categoryId;
            }
        }, error => {
            this.errorMessage = 'Không thể tải dữ liệu từ server.';
        });
    }

    onSubmit(uploadForm: NgForm): void {
        if (uploadForm.valid) {
            const updatedProduct = {
                name: this.name,
                price: this.price,
                id: this.id,
                imageUrl : this.imageUrl,
                description : this.description,
                quantity : this.quantity,
                categoryId : this.categoryId,
            };

            this.publicService.updateProduct(updatedProduct).subscribe(response => {
                this.messageService.showMessage('Cập nhật thành công');
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
