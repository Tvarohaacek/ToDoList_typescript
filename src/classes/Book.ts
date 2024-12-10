export class Book {
    public name: string;
    public author: string;
    private isAvailable: boolean;

    constructor(name: string, author: string, isAvailable: boolean = true){
        this.name = name;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    AvailabilityCheck (){
        return this.isAvailable;
    }

    takeBook() {
        if (this.AvailabilityCheck()) {
            console.log(`${this.name} has been borrowed.`)
            this.isAvailable = false;
        }
        else{
            console.log(`Unavailable to borrow ${this.name}`);
        }
        
    }

    returnBook() {
        console.log(`${this.name} has been returned to Library.`)
        
        this.isAvailable = true;
    }

    public GetName(): string{
        return this.name;
    }
    public GetAuthor(): string{
        return this.author;
    }
}