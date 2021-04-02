import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";

class ItemsService {
//   addValue() {
//     ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
//   }

addToCart(id){
debugger
   const foundItem = ProxyState.items.filter(i => i.id === id)
   if (foundItem[0].inCart === 0) {
      foundItem[0].inCart++
      ProxyState.cart.push(foundItem[0])
   } else {
      ProxyState.cart.forEach(c => {if(c.id === id) {c.inCart++}})
   }
   ProxyState.cart = ProxyState.cart
   console.log(ProxyState.cart);
   //document.getElementById('cart').innerHTML = 

//if the item is added again, just increase the quantity.    

   // _draw()
}

checkOut(){

  
}

}

export const itemsService = new ItemsService();