import { Component } from '@angular/core';
import { ProfilesComponent } from '../profiles/profiles.component';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-fav-product',
  imports: [ProfilesComponent],
  templateUrl: './fav-product.component.html',
  styleUrl: './fav-product.component.css'
})
export class FavProductComponent {
  favList:Product[]= [];
  constructor(private productServ: ProductsService) {}
    
    ngOnInit(){
      this.productServ.favoriteList.subscribe((data)=>{
        this.favList = data
        console.log(data);
      })
    }
    removeFromFavorite(item:Product){
      this.productServ.removeProduct(item);
    }
  }

