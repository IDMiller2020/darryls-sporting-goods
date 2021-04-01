import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";


//Private
function _draw() {
  let items = ProxyState.items;

  let template = ''
  items.forEach(i => template += i.Template)
  document.getElementById("item-card").innerHTML = template

let cart = ProxyState.cart
let template2 = ''
cart.forEach(c =>template2 += c.TemplateCart)
document.getElementById("cart").innerHTML = template2
}

//Public
export default class ItemsController {
  constructor() {
    ProxyState.on("items", _draw);
    _draw()
  }

  addToCart(id) {
    itemsService.addToCart(id)
  }
  checkOut(id){
      itemsService.checkOut(id)
  }

}