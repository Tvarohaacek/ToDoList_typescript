import {Book} from "../classes/Book";
import {Librarian} from "../classes/Librarian";
import {Reader} from "../classes/Reader";

const kniha1 = new Book ("Havran", "Poe", true);
const kniha2 = new Book ("Hobit", "J. R. R. Tolkien", false);
const kniha3 = new Book ("Válka s mloky", "Čapek", true);

var ctenar = new Reader ();

var knihovnik = new Librarian();

ctenar.borrowBook(kniha1);
knihovnik.returnBook(kniha1);

console.log(kniha1.AvailabilityCheck);

ctenar.borrowBook(kniha2);
ctenar.borrowBook(kniha3);
ctenar.borrowBook(kniha3);
