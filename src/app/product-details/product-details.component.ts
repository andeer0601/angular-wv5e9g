import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { products } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit() {

    // Pegar o ID da rota atual
    let parametros = this.route.snapshot.paramMap
    let id = Number(parametros.get('productId'))

    // Encontrar o produto com o ID correspondente
    this.product = products.find(product => product.id === id)

  }

}