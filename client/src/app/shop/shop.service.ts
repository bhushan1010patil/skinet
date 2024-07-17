import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5093/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?:number, typeId?:number) {
    let params = new HttpParams();

    params = params.append('sort','priceAsc');
    params = params.append('search','a');

    if(brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if(typeId) {
      params = params.append('typeId', typeId.toString());
    }

    console.log('Info log: getProduct() params= ' + params);
    return this.http.get<IPagination>(this.baseUrl + 'products',{observe: 'response', params})
    .pipe(map(response => {return response.body}));
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
