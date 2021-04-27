import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems()
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  total = 0.00

  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder
  ) {
    for(let i = 0; i < this.items.length; i++){
      this.total += Number(this.items[i].price)
    }
    console.log(`Tota: ${this.total}`)
   }

  ngOnInit() {
  }

  onSubmit() : void {
    
    console.warn('Seu pedido foi efetuado', this.checkoutForm.value, this.items),
    this.items = this.cartService.clearCart()
    this.checkoutForm.reset()

  }

}