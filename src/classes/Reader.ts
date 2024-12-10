import { Book } from "./Book";

export class Reader {

    
    
    public name: string;
    
    constructor(name: string = "Jmeno"){
        this.name = name;
        
    }
    public borrowBook (book: Book): void {
        if (book.AvailabilityCheck()){
            book.takeBook();
            
        }
        else {
            console.log(`${book.name} is currently not available to borrow.`)
            
        }
    }
}




