import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../data/models/Iproduct';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    products: Iproduct[] = []
    //lazyLoadedComponent = BlogCardComponent
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getProducts();
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
                console.log('Request completed');
            }
        });
    }
}
