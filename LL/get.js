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
    this.length++;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    var temp = this.head;
    var i = 0;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }
}

const LL = new LinkedList(5);
LL.push(7);
console.log(LL.get(-1));
