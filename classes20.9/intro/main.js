class Product{
    constructor(title,price,img,description,quantity){
        this.title=title
        this.price=price
        this.img=img
        this.description=description
        this.quantity=quantity
    }
    getPrice(){
        return this.price;
    }
}

const P1=new Product('iphone 14',4500,'',)
console.log(P1);

//
/* 
*
*
*
*/