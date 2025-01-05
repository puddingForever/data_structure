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

  // i can just use get method
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    var temp = this.head;
    for (var i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  setUsingGet(index, value) {
    var temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  // write code from start
  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    var temp = this.head;
    for (var i = 0; i < index; i++) {
      temp = temp.next;
    }
    temp.value = value;
    return temp;
  }
}

const LL = new LinkedList(7);
LL.setUsingGet(0, 2);
console.log(LL);
