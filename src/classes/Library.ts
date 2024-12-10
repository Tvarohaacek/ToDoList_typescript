import {Book} from "./Book";
import { Reader } from "./Reader";

export class Library {
    private books: Book[] = [];

    

    public addBook(book: Book):void {
        this.books.push(book);
        console.log(`Book named ${book.GetName} was added to library.`);
    }

    public listOfAvailableBooks(): Book[] {
        
        const books = this.books.filter((b => b.AvailabilityCheck));

        console.log("Dostupné knihy:");
        books.forEach((book) => console.log(`- ${book.GetName()}`));
        return books;
     
    }

    public checkOutBook(reader: Reader, bookTitle: string): void {
        const book = this.books.find ((b) => b.GetName() === bookTitle)

        if (book) {
            reader.borrowBook(book);
        }
        else{
            console.log(`Book named "${bookTitle}" was not found`)
        }
    }
}