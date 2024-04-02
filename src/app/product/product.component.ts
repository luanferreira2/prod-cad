import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product [] = [];

  formGroupProduct: FormGroup;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.service.getProducts().subscribe({
      next: data => this.products = data
    });

  }

  constructor(private formBuilder: FormBuilder, private service: ProductService){
    this.formGroupProduct = formBuilder.group({
      id : [''],
      name : [''],
      preco : [''],
      quantidade : [''],
      descricao : ['']

    })

  }

  
  save(){
    this.service.save(this.formGroupProduct.value).subscribe({
      next: data => this.products.push(data)

    });


  }

}
