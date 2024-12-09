import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../data/models/Iproduct';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';
import { Iblog } from '../../../data/models/IBlog';
import { PublicService } from '../services/public.service';
import { ICategory } from '../../../data/models/ICategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    products: Iproduct[] = []
    blogs: Iblog[] = [];
    categories: ICategory[] = [];
    //lazyLoadedComponent = BlogCardComponent
    constructor(private http: HttpClient, private publicService: PublicService) { }

    ngOnInit() {
        this.getProducts();
        this.publicService.getBlogs().subscribe((response: Iblog[]) => {
            this.blogs = response;
        });
        this.publicService.getCategories().subscribe((response: ICategory[]) => {
            this.categories = response;
        });
    }

    getProducts() {
        this.http.get<Iproduct[]>('/api/products').subscribe({
            next: (response: Iproduct[]) => {
                this.products = response;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                //console.log('Request completed');
            }
        });
    }
}
