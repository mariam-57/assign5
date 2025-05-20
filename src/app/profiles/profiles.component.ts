import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { UserComponent } from '../user/user.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-profiles',
  imports: [UserComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})

export class ProfilesComponent {
  products!:Product[];
  constructor(private productServ: ProductsService){}

 deleteRecipe(id: number) {
    console.log(`parent get id ${id}`);
    this.products = this.products.filter((product) => product.id != id);
  }
  ngOnInit() {
    this.productServ.getAllProduct().subscribe((data) => {
      this.products=data.recipes
    });
  }
  ngOnDestroy() {
    // cleanup
    console.log('from ngOnDestroy');
  }
}
