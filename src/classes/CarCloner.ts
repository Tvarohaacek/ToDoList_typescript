interface Prototype {
    clone(): this
}

class Vehicle implements Prototype {
    constructor (public name: string, public model: string, public year: number){
        
    }

    clone(): this {
        return Object.create(this);
    }
}

const car1 = new Vehicle ("Toyota", "Corolla", 2014);
const car2 = car1.clone();
car2.model = "Avensis";

