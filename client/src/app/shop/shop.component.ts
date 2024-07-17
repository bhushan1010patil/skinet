import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

  products : IProduct[]
  brands: IBrand[]
  types: IType[]
  brandIdSelected: number = 0
  typeIdSelected: number = 0

  constructor(private shopService: ShopService){}

  ngOnInit(): void {

    this.getProducts();
    this.getBrands();
    this.getTypes();

  }

  /* Get all Product details */
  getProducts() {
    
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe(response => {
      this.products = response.data;
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
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

}
