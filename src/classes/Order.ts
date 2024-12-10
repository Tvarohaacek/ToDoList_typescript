import { Product } from "./Product";

export class Order {
    public ProductList: Product[] = [];
    
    public AddProduct(product: Product):void {
        this.ProductList.push(product);
        
        console.log(`Produkt ${product.ProductGetName(product)} byl přidán na seznam.`)

        
    }

    public RemoveProduct(name: string):void {      
            let index = this.ProductList.findIndex(product => product.name === name)
            if (index >= -1){
                this.ProductList.splice(index, 1);
                console.log(`Objekt ${name} byl odebrán...`);
            }
    }

    public ShowOrder():void {
        console.log(`Seznam produktů:`)
        this.ProductList.forEach(e => {
            console.log(`${e.ProductGetName(e)} - ${e.ProductGetPrice(e)}$`);
            
        });
    }

}