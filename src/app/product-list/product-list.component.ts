import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(name = "") {
    window.alert(`O produto ${name} foi compartilhado!`)
  }

  onNotify(name = "produto") {
    window.alert(`Você será notificado quando o ${name} estiver com desconto`)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/