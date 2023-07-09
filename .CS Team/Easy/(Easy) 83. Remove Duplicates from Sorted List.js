class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
  findParent(Node) {
    let current = this.head;
    while (current && current.next) {
      if (current.next === Node) {
        return current;
      } else {
        current = current.next;
      }
    }
    return null;
  }
  //---------
  addToHead(data) {
    let newNode = new node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  addToTail(data) {
    let newNode = new node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  //---------
  delete(Node) {
    let parent = this.findParent(Node);
    if (!parent) return `Node Not found`;

    let current = parent.next;

    if (parent.data == null) {
      this.head = current.next;
    }
    if (current.next == null) {
      this.tail = parent;
    }
    if (parent.data && current.next) {
      parent.next = current.next;
    }
  }
  //---------
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    return result;
  }
}

class linkedListIterator {
  constructor(linkedList) {
    this.current = linkedList.head;
    this.list = linkedList;
  }

  hasNext() {
    return this.current?.next != null;
  }

  findNext() {
    if (this.hasNext()) {
      this.current = this.current.next;
      return this.current.data;
    }
    if (this.current != null) {
      this.current.data = null;
    }
    return null;
  }

  checkNext() {
    if (this.hasNext()) {
      let output;
      this.current = this.current.next;
      output = this.current.data;
      this.current = this.list.findParent(this.current);
      return output;
    } else {
      return null;
    }
  }
}
//----------------------------------------------------------------
// Implementation using new linked list to return the result
var deleteDuplicates = function (head) {
  let iterator = new linkedListIterator(head);
  let result = new SingleLinkedList();
  let count = 1;

  while (count <= head.size()) {
    if (iterator.current.data == iterator.checkNext()) {
      iterator.findNext();
    } else {
      result.addToTail(iterator.current.data);
      iterator.findNext();
    }
    count++;
  }
  return result;
};
let list3 = new SingleLinkedList();
list3.addToHead(1);
list3.addToTail(1);
list3.addToTail(2);

let list4 = new SingleLinkedList();
list4.addToHead(1);
list4.addToTail(1);
list4.addToTail(2);
list4.addToTail(2);
list4.addToTail(3);
list4.addToTail(4);
list4.addToTail(4);

console.log(deleteDuplicates(list3).print());
console.log(deleteDuplicates(list4).print());
//----------------------------------------------------------------
// Implementation in the same linked list used as the input
var deleteDuplicates = function (head) {
  let iterator = new linkedListIterator(head);
  while (iterator.current.next) {
    if (iterator.current.data == iterator.checkNext()) {
      iterator.findNext();
      head.delete(iterator.current);
    } else {
      iterator.findNext();
    }
  }
  if (iterator.current.data == head.tail.data) {
    head.tail.next = null;
  }
  return head;
};
//----------------------------------------------------------------
let list1 = new SingleLinkedList();
list1.addToHead(1);
list1.addToTail(1);
list1.addToTail(2);

let list2 = new SingleLinkedList();
list2.addToHead(1);
list2.addToTail(1);
list2.addToTail(2);
list2.addToTail(3);
list2.addToTail(3);
list2.addToTail(4);

console.log(deleteDuplicates(list1).print());
console.log(deleteDuplicates(list2).print());
