import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: Product [] = [];

  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formGroupProduct = formBuilder.group({
      id : [''],
      name : [''],
      preco : [''],
      quantidade : [''],
      descricao : ['']



    })


  }
  
  save(){
    this.products.push(this.formGroupProduct.value)


  }

}
