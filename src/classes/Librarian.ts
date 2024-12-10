import { Book } from "./Book";
import { Reader } from "./Reader";



export class Librarian extends Reader{
    

    constructor(name: string = "Jmeno"  ){
        super(name);
    }
    

    checkOutBook(reader: Reader, book: Book) {
        if(!book.AvailabilityCheck()) {
            throw new Error("Book is not available");
        }

        reader.borrowBook(book);
    }

    returnBook(book: Book) {
        book.returnBook();
    }
}