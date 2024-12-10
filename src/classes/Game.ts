export class Game {
    constructor(public name: string, public type: string, public year: number) {
        
    }

    displayDetails() {
        console.log(`Hra ${this.name} která je ${this.type} byla vydána v roce: ${this.year}`);
    }
}

const game1 = new Game("GTA", "Multiplayer", 2013);
const game2 = new Game("Stardew Valley", "Singleplayer", 2017);

game1.displayDetails();
game2.displayDetails();