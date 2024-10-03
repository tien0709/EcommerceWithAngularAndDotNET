import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from './shared/models/Product';
import { IPagination } from './shared/models/Pagination';


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    public forecasts: WeatherForecast[] = [];
    public products: Iproduct[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.getForecasts();
      this.getProducts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
    }
    getProducts() {
        this.http.get<IPagination>('https://localhost:5221/api/products').subscribe({
            next: (response: IPagination) => {
                this.products = response.data;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                console.log('Request completed');
            }
        });
    }

  title = 'E-Shop';
}
