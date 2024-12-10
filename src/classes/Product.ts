export class Product {
    public name: string;
    public price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    public ProductGetName(product: Product):string {
        return product.name;
    }

    public ProductGetPrice(product: Product):number {
        return product.price;
    }
}