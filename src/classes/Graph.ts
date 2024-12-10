export class Graph {
    private adjacencyList: { [key: string]: string[] } = {};
  
    addVertex(vertex: string): void {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1: string, vertex2: string): void {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); 
    }
  
    display(): void {
      for (let vertex in this.adjacencyList) {
        console.log(vertex, '->', this.adjacencyList[vertex]);
      }
    }
  }
  