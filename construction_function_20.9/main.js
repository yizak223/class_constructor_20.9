const BOOK_ARRAY=[]
function Book(title,category,author,pages,img) {
    this.title=title
    this.category=category
    this.author=author
    this.pages=pages
    this.img=img
    this.render=function() {
       return `<div>
                <h1>${this.title}</h1>
                <img style='width:10vw;height:15vh;' src='${this.img}'>
                <p>${this.category}</p>
                <span>${this.author}</span>
                <span>${this.pages}</span>
            </div>
        `
    }
}

BOOK_ARRAY.push(new Book('To Kill a Mockingbird','Classic Fiction','Harper Lee',281,'https://cdn.pixabay.com/photo/2023/08/15/05/37/lighthouse-8191282_1280.jpg' ))
BOOK_ARRAY.push(new Book('The Catcher in the Rye','Coming-of-Age Fiction','J.D. Salinger',224,'https://cdn.pixabay.com/photo/2023/06/11/16/07/switzerland-8056381_640.jpg' ))
BOOK_ARRAY.push(new Book('The Great Gatsby','Classic Fiction','F. Scott Fitzgerald',180,'https://cdn.pixabay.com/photo/2023/07/10/18/59/bird-8118926_640.jpg' ))
BOOK_ARRAY.push(new Book('The Hobbit','Fantasy',' J.R.R. Tolkien',310,'https://cdn.pixabay.com/photo/2023/09/04/16/21/spider-8233129_640.jpg'))

console.log({BOOK_ARRAY});

console.log(BOOK_ARRAY[0].render());


BOOK_ARRAY.forEach( book => {
    inSell.innerHTML+=book.render()
});
