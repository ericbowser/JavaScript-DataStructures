class Node {
    value = null;
    next = null;

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    
    constructor() {
        this.length = 0;
        this.head = null;
    }

    addNode(value) {
        this.head = new Node(value, this.head);
        this.length++;
        return this;
    }
    
    size() {
        return this.length;
    }
    
    isEmpty() {
        return this.head
    }
    
    findNode(value) {
        if (this.length > 0) {
            if (this.length === 1) {
                return this.head;
            } else {
                let current = this.head;
                while(current !== null) {
                    if (current.value === value){
                        return current.value;
                    }
                    current = this.head.next;
                }
            }
        }
    }
   
    addTail(value) {
        this.head = new Node(value, null);
        this.length++;
        return this;
    }
}

module.exports = LinkedList;