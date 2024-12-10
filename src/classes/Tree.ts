export class TreeNode<T> {
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
  
    constructor(public value: T) {}
  }
  
  export class BinarySearchTree<T> {
    root: TreeNode<T> | null = null;
  
    insert(value: T): void {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    search(val: T, node: TreeNode<T> | null = this.root): boolean {
        if(node === null) return false;
        if(val === node.value) return true;
        if(val < node.value) return this.search(val, node.left);
        return this.search(val, node.right);
    }
  }
  
  