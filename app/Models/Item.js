//import { generateId } from "../Utils/GenerateId.js"

export default class Item {
    constructor(title, price, description, stock, imgUrl, id) {
       //this.id = generateId() 
       this.id = id
       this.title = title
       this.price = price
       this.description = description
       this.stock = stock
       this.imgUrl = imgUrl
    }

    get Template() {
// <!-- NOTE Img on Card- how to fit images so they all are same size?? -->
       return `
       <div class="col-md-4 my-4">
                <div class="card shadow">
                    <div class=" d-flex justify-content-center">
                    <img src="${this.imgUrl}" class="item-image cover mt-3" alt="product image">
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">${this.title}</h3>
                      <h5>${this.price}</h5>
                      <p class="card-text">${this.description}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-0">${this.stock} in stock</p>
                      <a href="#" class="btn btn-success" onclick="app.itemsController.addToCart('${this.id}')">Add To Cart</a>  
                      </div>
                      
                    </div>
                  </div>
            </div>`
    }

    get TemplateCart(){
        return `
        <div class="col-12 my-2">
                <div class="card border-bottom">
                    <div class=" d-flex flex-column justify-content-start">
                    <img src="${this.imgUrl}" class="item-image cover mt-3" alt="product image">
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">${this.title}</h3>
                      <h5>${this.price}</h5>
                      <p class="card-text">${this.description}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-0">${this.stock} in stock</p>
                      <a href="#" class="btn btn-success" onclick="app.itemsController.checkOut('${this.id}')">Check Out</a>  
                      </div>
                      
                    </div>
                  </div>
            </div>`
    }
     

}
