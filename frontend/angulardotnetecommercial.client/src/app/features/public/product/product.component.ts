import { Component } from '@angular/core';
import { Iproduct } from '../../../data/models/Iproduct';
import { PublicService } from '../services/public.service';
import { ICategory } from '../../../data/models/ICategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    products: Iproduct[] = [];
    categories: ICategory[] = [];
    categoryIndex: string = "0";//for color selected cell

    totalProducts: number = 0; 
    productsPerPage: number = 9;  
    currentPage: number = 1;  
    categoryId: string = "0";
    constructor(private publicService: PublicService) { }

    ngOnInit(): void {
        this.publicService.getProducts().subscribe((response: Iproduct[]) => {
            this.products = response;
            this.totalProducts = this.products.length;
            this.products = response.slice(0, this.productsPerPage);
        });
        this.publicService.getCategories().subscribe((response: ICategory[]) => {
            this.categories = response;
        });
    }

    handleCategoryClick(categoryId: string) {
        this.currentPage = 1;
        this.publicService.getProducts({CategoryId: categoryId }).subscribe((response: Iproduct[]) => {
            this.products = response;
            this.totalProducts = this.products.length;
            this.products = response.slice(0, this.productsPerPage);
            this.categoryId = categoryId;
        });
        this.categoryIndex = categoryId;
    }
    handleCategoryAllButtonClick() {
        this.currentPage = 1;
        this.publicService.getProducts().subscribe((response: Iproduct[]) => {
            this.products = response;
            this.totalProducts = this.products.length;
            this.products = response.slice(0, this.productsPerPage);
            this.categoryId = "0";
        });
        this.categoryIndex = "0";
        console.log(this.totalProducts);
    }

    get totalPages(): number {
        return Math.ceil(this.totalProducts / this.productsPerPage);
    }

    getPaginatedProducts(page: number): void {
        this.currentPage = page;
        this.publicService.getProducts({ page: this.currentPage, pageSize: this.productsPerPage, CategoryId: this.categoryId }).subscribe((response: Iproduct[]) => {
            this.products = response;
            this.products = response.slice(0, this.productsPerPage);
        });
    }
}
