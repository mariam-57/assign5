import { Component, Input, input } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id?: string;
  selectProduct?: Product;
  constructor(private productService : ProductsService)
  {}
  ngOnInit(){
    this.productService.getProductById(parseInt(this.id!)).subscribe((data)=>{
      this.selectProduct = data
    })
  }

}
