import {Product} from "../classes/Product";
import {Order} from "../classes/Order";

const order = new Order();
const product1 = new Product("Laptop", 1500);
const product2 = new Product("Mouse", 25);

order.AddProduct(product1);
order.AddProduct(product2);

order.ShowOrder(); // Výstup: Laptop - $1500, Mouse - $25

