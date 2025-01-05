// CREATE NODE CLASS HERE //
// CREATE LL CONSTRUCTOR HERE //

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}

const myLL = new LinkedList(5);
console.log(myLL);
