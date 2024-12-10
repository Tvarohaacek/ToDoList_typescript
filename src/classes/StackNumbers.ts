export class StackNumbers<T> {
    private items: T[] = [];
    
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }

    Sum(): number {
        let suma = 0;
        this.items.forEach(e => {
            if ( typeof e === "number") {
                suma += e;
            }
        });
        console.log(suma);
        return suma;
    }
  }
    