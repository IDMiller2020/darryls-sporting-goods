import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Item[]} */
  items = [
    new Item('HD Binoculars', 189.99, 'Enhance your long-range hunting visibility', 15, 'https://images-na.ssl-images-amazon.com/images/I/61Iu2iOtBgL._AC_SY355_.jpg', '7463849'),
    new Item('Garmin GPS', 219.99, 'Handheld GPS with navigation sensors', 15, 'https://images-na.ssl-images-amazon.com/images/I/51kExPhAj9L._AC_SX679_.jpg', 'djfy38508'),
    new Item ('Rubber Boots', 49.97, 'Comfortable and ready for work boots for men', 15, 'https://dks.scene7.com/is/image/GolfGalaxy/19CTTM15NCHWPRBBRFBO_Black?qlt=70&wid=600&fmt=pjpeg', 'dfk96gjr')
  ]

  cart = []
}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
