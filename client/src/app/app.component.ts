import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { IPagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[];  

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    
    this.http.get('http://localhost:5093/api/products?pageSize=50&sort=priceAsc&search=a').subscribe((response:IPagination) => {
      console.log('Inside call');
      console.log(response.data);
      this.products = response.data;
    }, error => {
      console.log(error);
    });

  }
}
