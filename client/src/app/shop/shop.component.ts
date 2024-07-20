import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

  products : IProduct[];
  brands: IBrand[];
  types: IType[];
  
  shopParams = new ShopParams();
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];

  totalCount: number;

  constructor(private shopService: ShopService){}

  ngOnInit(): void {

    this.getProducts();
    this.getBrands();
    this.getTypes();

  }

  /* Get all Product details */
  getProducts() {
    
    this.shopService.getProducts(this.shopParams).subscribe(response => {
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.pageCount;
    },error => {
      console.log(error);
    });
  }

  /* Get all Brands details */
  getBrands() {
    this.shopService.getBrands().subscribe(response =>{
      this.brands = [{id: 0, name: 'All'}, ...response];
    },error =>{
      console.log(error);
    });
  }

  /* Get all Types details */
  getTypes() {
    this.shopService.getTypes().subscribe(response =>{
      this.types = [{id: 0, name: 'All'}, ...response];
    },error =>{
      console.log(error);
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(e: Event){

    this.shopParams.sort = (e.target as HTMLInputElement).value;
    this.getProducts();
  }

  onPageChanged(e: any){
    this.shopParams.pageNumber = e.value;
    this.getProducts();
  }

}
