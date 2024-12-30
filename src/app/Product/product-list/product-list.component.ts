import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [UpperCasePipe,CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
   val:number=4;
   prods:any;
   prodsvr=inject(ProductService);
   ngOnInit(): void {
    // this.prods=this.prodsvr.getProducts();
     this.prodsvr.getProducts().subscribe(
      {
      next:result=>this.prods=result,
      error:err=>alert(JSON.stringify(err))
      }
     );
   }
}
