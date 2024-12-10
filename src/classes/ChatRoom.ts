
interface Observer {
    receiveMessage(message: string): void;
}


class ChatRoom {
    private users: Observer[] = [];

    addUser(user: Observer): void {
        this.users.push(user);
    }

    removeUser(user: Observer): void {
        this.users = this.users.filter(u => u !== user);
    }


    sendMessage(message: string): void {
        for (const user of this.users) {
            user.receiveMessage(message);
        }
    }
}

class ChatUser implements Observer {
    constructor(private name: string) {}

    receiveMessage(message: string): void {
        console.log(`${this.name} obdržel zprávu: ${message}`);
    }
}


const chatRoom = new ChatRoom();

const user1 = new ChatUser("Alice");
const user2 = new ChatUser("Bob");

chatRoom.addUser(user1);
chatRoom.addUser(user2);

chatRoom.sendMessage("Vítejte v chatovací místnosti!");


chatRoom.removeUser(user2);
chatRoom.sendMessage("Toto je druhá zpráva!");
