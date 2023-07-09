// class node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// //----------------------------
// class SingleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   //---------
//   isEmpty() {
//     return this.length === 0;
//   }
//   size() {
//     return this.length;
//   }
//   //---------
//   addToHead(data) {
//     let newNode = new node(data);
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//   }
//   addToTail(data) {
//     let newNode = new node(data);
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }
//   //---------
//   print() {
//     let current = this.head;
//     let result = "";
//     while (current) {
//       result += current.data + " ";
//       current = current.next;
//     }
//     return result;
//   }
// }
// //----------------------------
// class linkedListIterator {
//   constructor(linkedList) {
//     this.current = linkedList.head;
//   }
//   // hasNext() {
//   //   return this.current != null && this.current.next != null;
//   // }

//   hasNext() {
//     return this.current.next?.data != null;
//   }
//   findNext() {
//     if (this.hasNext()) {
//       this.current = this.current.next;
//       return this.current.data;
//     }
//     if (this.current != null) {
//       this.current.data = null;
//     }
//     return null;
//   }
// }
// //----------------------------------------------------------
// let list1 = new SingleLinkedList();
// list1.addToTail(1);
// list1.addToTail(2);
// list1.addToTail(4);

// let list2 = new SingleLinkedList();
// list2.addToTail(1);
// list2.addToTail(3);
// list2.addToTail(4);

// let list3 = new SingleLinkedList();
// let list4 = new SingleLinkedList();

// let list5 = new SingleLinkedList();
// let list6 = new SingleLinkedList();
// list6.addToHead(0);

// //----------------------------------------------------------
// let mergeTwoLists = function (list1, list2) {
//   let iterator1 = new linkedListIterator(list1);
//   let iterator2 = new linkedListIterator(list2);

//   let resultList = new SingleLinkedList();

//   if (list1.isEmpty()) {
//     return list2;
//   }
//   if (list2.isEmpty()) {
//     return list1;
//   }

//   while (iterator1.current?.data != null || iterator2.current?.data != null) {
//     let l1Current = iterator1.current;
//     let l2Current = iterator2.current;

//     if (l2Current.data <= l1Current.data) {
//       resultList.addToTail(l2Current.data);
//       iterator2.findNext();
//     }
//     if (l2Current.data > l1Current.data) {
//       resultList.addToTail(l1Current.data);
//       iterator1.findNext();
//     }
//     if (l1Current.data == null) {
//       resultList.addToTail(l2Current.data);
//       iterator2.findNext();
//     }
//     if (l2Current.data == null) {
//       resultList.addToTail(l1Current.data);
//       iterator1.findNext();
//     }
//   }

//   return resultList;
// };

// console.log(mergeTwoLists(list1, list2));
// console.log(mergeTwoLists(list3, list4));
// console.log(mergeTwoLists(list5, list6));

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
}

let mergeTwoLists = function (list1, list2) {
  let iterator1 = new linkedListIterator(list1);
  let iterator2 = new linkedListIterator(list2);

  let resultList = new SingleLinkedList();

  if (list1.isEmpty()) {
    return list2;
  }
  if (list2.isEmpty()) {
    return list1;
  }

  while (iterator1.hasNext() || iterator2.hasNext()) {
    let l1Current = iterator1.current;
    let l2Current = iterator2.current;

    if (l2Current == null || l1Current?.data <= l2Current?.data) {
      resultList.addToTail(l1Current.data);
      iterator1.findNext();
    }
    if (l1Current == null || l2Current?.data <= l1Current?.data) {
      resultList.addToTail(l2Current.data);
      iterator2.findNext();
    }
  }

  if (
    iterator2.current == null ||
    iterator1.current?.data <= iterator2.current?.data
  ) {
    resultList.addToTail(iterator1.current.data);
  }
  if (
    iterator1.current == null ||
    iterator2.current?.data <= iterator1.current?.data
  ) {
    resultList.addToTail(iterator2.current.data);
  }

  return resultList;
};

// example usage:
let list1 = new SingleLinkedList();
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(4);

let list2 = new SingleLinkedList();
list2.addToTail(1);
list2.addToTail(3);
list2.addToTail(4);

let list3 = new SingleLinkedList();
let list4 = new SingleLinkedList();

let list5 = new SingleLinkedList();
let list6 = new SingleLinkedList();
list6.addToHead(0);

console.log(mergeTwoLists(list1, list2).print()); // expect "1 1 2 3 4 4"
console.log(mergeTwoLists(list3, list4).print());
console.log(mergeTwoLists(list5, list6).print());
