import { Product } from './product.model';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService , private  router: Router) { }

  ngOnInit(): void {

  }
createProduct(): void {
  this.productService.cirate(this.product).subscribe(() =>{

    this.productService. showMessage ('Protudo Criado com sucesso ');
    this.router.navigate(['/products'])
  })
}
cancela(): void {

  this.router.navigate(['/products'])

}
}
