export class Queue<T> {
    private items: T[] = [];
  
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    peek(): T | undefined {
      return this.items[0];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }

    Obsluz(items: Queue<T>): void {
        let item = items.peek();
        console.log(`${item} byl obsloužen. Další prosím!`);
        items.dequeue();
    }
  }
  