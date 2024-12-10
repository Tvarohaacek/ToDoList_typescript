export class ListNode<T> {
    next: ListNode<T> | null = null;
  
    constructor(public value: T) {}
  }
  
  export class LinkedList<T> {
    head: ListNode<T> | null = null;
  
    add(value: T): void {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    find(value: T): ListNode<T> | null {
      let current = this.head;
      while (current && current.value !== value) {
        current = current.next;
      }
      return current;
    }
  }
  