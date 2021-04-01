import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";

class ItemsService {
//   addValue() {
//     ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
//   }

addToCart(id){


   const foundItem = ProxyState.items.filter(i => i.id != id)
   ProxyState.cart.push(new Item())
    console.log(ProxyState.items);
    //document.getElementById('cart').innerHTML = 

//if the item is added again, just increase the quantity.    

   // _draw()
}

checkOut(){

  
}

}

export const itemsService = new ItemsService();