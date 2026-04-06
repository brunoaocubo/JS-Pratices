class Book{
    constructor(title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    disponibilidade(){
        if(this.copies < 1){
            return console.log("Não possui mais cópias disponiveis.")
        }
        
        return this.title +", Número de Cópias: "+ this.copies
    }
}
const library = []
const book1 = new Book("Essencialismo", "Greg McKeown", "9783127323207", 10)
const book2 = new Book("", "Greg McKeown", "9783127323207", 50)

library.push(book1)

function addBooktoStock(newBook){
    const values = library.filter(n => newBook.isbn === n.isbn)
    if(values === null){
        return library.push(newBook)
    }
    else{
        return
    }
}

addBooktoStock(book1)
//console.log(library)
