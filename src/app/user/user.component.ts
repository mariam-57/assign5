import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product';
@Component({
  selector: 'app-user',
  imports: [UpperCasePipe, DatePipe, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() product:any

  @Output() sendToParent=new EventEmitter<number>() 

    constructor(private router: Router,private producServ:ProductsService) {}


  handelDelete(id: number) {
    console.log(`child prodcast he want to delete recipe with id ${id}`);
    this.sendToParent.emit(id);
  }
  ngOnChanges() {
    console.log(`this is ngOnChanges`);
  }

  moveToDetails(id: number) {
    this.router.navigate(['/recipeDetails', id]);
  }


  addToFavorite(item:Product){
    this.producServ.addToFavoriteProduct(item)
    
  }



}
