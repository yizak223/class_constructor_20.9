class Entity{
    constructor(name,width,height,x,y,img){
        this.name=name;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.img=img;
    }
    draw(){

    }
}

class Player extends Entity{
    constructor(name,width,height,x,y,img,life)
    {
       super(name,width,height,x,y,img)
        this.life=life;
        this.speeed=0;
    }
    
}

const player= new Player('mario',15,50,50,3,'url')
console.log(player); 
class Enemy extends Entity{
    constructor(name,width,height,x,y,damage){
        super(name,width,height,x,y,damage)
        this.damage=damage;
    }
    enemyDie(){
        Enemy.shift()
    }
}

class Platform{
    constructor(x,y,width,color){
        this.x=x
        this.y=y
        this.width=width;
        this.color=color
    }
}

//
class Product{
    constructor(title,price,insale,salePrecentage,quantity,img){
        this.title=title
        this.price=price
        this.insale=insale
        if (this.insale) {
            this.salePrecentage=salePrecentage
            this.priceAfterSale=this.price-this.price*this.salePrecentage
        }
        this.quantity=quantity
        this.img=img
    }
    totalPrice(){
        if (this.insale) {
            return this.quantity*this.priceAfterSale 
        }
    }
    render(){
        if (this.insale) {
            return `<h1>${this.title}</h1>
                    <img style='width:10vw;height:15vh;' src='${this.img}'>
                    <p>before sale:${this.price}</p>
                    <p>after sale: ${this.priceAfterSale}</p>`
        }
        return `<h1>${this.title}</h1>
        <img style='width:10vw;height:15vh;' src='${this.img}'>
                <p>not in sale right now</p>`
    }
}
const PRODUCT_ARRAY=[]


const product1= new Product('book',100,true,0.10,7,'https://media.wired.co.uk/photos/606da625751ea43ccd988c67/4:3/w_1704,h_1278,c_limit/wikipedia-book.jpg')
const product2= new Product('phone',100,false,0,7,'https://www.bug.co.il/images/site/products/40d796c4-9d49-4830-849e-74444b934d62.png')
PRODUCT_ARRAY.push(product1)
PRODUCT_ARRAY.push(product2)

console.log(product1);
console.log(product2);

PRODUCT_ARRAY.forEach(product => {
    mainDiv.innerHTML+=product.render()
});

console.log('hellow');