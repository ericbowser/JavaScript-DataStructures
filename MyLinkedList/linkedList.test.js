const LinkedList = require('./LinkedList');
const {expect} = require("expect");

test('adds a node to the list', () => {
    
    let added = new LinkedList();
    added = added.addNode(10);
    expect(added.length).toBe(1);
    
    added = new LinkedList();
    for(let i = 0; i < 10; i++) {
       added.addNode(i);
    }
    
    expect(added.length).toBe(10);
})

test('adds a node to the tail of the list', () => {
    let linkedList = new LinkedList();
    linkedList = linkedList.addTail(1);
    linkedList = linkedList.addTail(10);
   
    expect(linkedList.length).toBe(2);
    console.log(linkedList.head.value);
    linkedList = linkedList.addNode(1);
    linkedList = linkedList.addNode(10);
    
    expect(linkedList.length).toBe(4);
})

test('finds a node in the LinkedList', () => {
    let linkedList = new LinkedList();
    linkedList = linkedList.addTail(3);
    linkedList = linkedList.addTail(10);

    expect(linkedList.length).toBe(2);
    linkedList = linkedList.addNode(1);
    linkedList = linkedList.addNode(10);

    linkedList.findNode(1);
})
