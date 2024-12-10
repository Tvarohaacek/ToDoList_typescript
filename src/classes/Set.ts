export class Set<T> {
    private items: { [key: string]: T } = {};
  
    add(value: T): void {
      if (!this.has(value)) {
        this.items[JSON.stringify(value)] = value;
      }
    }
  
    remove(value: T): void {
      if (this.has(value)) {
        delete this.items[JSON.stringify(value)];
      }
    }
  
    has(value: T): boolean {
      return JSON.stringify(value) in this.items;
    }
  }
  