class Node {
    constructor(name, age, id) {
        this.data = {
            name: name,
            age: age,
            id: id

        };
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    appendNode(name, age, id) {
        const newNode = new Node(name, age, id);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.tail = newNode;
        }
    }

    prependNode(name, age, id) {
        const newNode = new Node(name, age, id);
        
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        console.log("Size of the linked list:", count);
        return count;
    }
    
    findNode(index) {
        if (index < 0 || this.head === null) {
            return null;
        }

        let currentIndex = 0;
        let current = this.head;

        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current !== null ? current.data : null;
    }

    findHead() {
        if (this.head !== null) {
            return this.head.data
        } else {
            return null;
        }
    }

    findTail() {
        if (this.tail !== null) {
            return this.tail.data
        } else {
            return null;
        }
    }

    pop() {
        if (this.head === null) {
            return null
        } else if (this.head === this.tail) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;
            return removedNode.data
        } else {
            let current = this.head;
            let previous = null;

            while (current.next !== this.tail) {
                current = current.next;
            }

            previous = current;
            current = this.tail;
            this.tail = previous;
            previous.next = null;
            return current.data;
        }
    }

    find(value) {
        if (this.head === null) {
            return null;
        }
    
        let current = this.head;
        while (current !== null) {
            let matchFound = true;
    
            for (let key in value) {
                if (current.data[key] !== value[key]) {
                    matchFound = false;
                    break;
                }
            }
    
            if (matchFound) {
                return current.data;
            }
    
            current = current.next;
        }
    
        return "find(value) data not found";
    }
    
    toString() {
        if (this.head === null) {
            return "toString data not found";
        }
    
        let current = this.head;
        let listString = '';
    
        while (current !== null) {
            listString += JSON.stringify(current.data) + '\n'; 
            current = current.next;
        }
    
        return listString;
    }
}


const person1 = new LinkedList();
person1.appendNode('bill', 20, 214321); // 1
person1.appendNode('sally', 21, 123152); // 2
person1.prependNode('bob', 31, 421321); //head
console.log(person1.findHead());
console.log(person1.findTail());
console.log(person1.findNode(1));
console.log(person1.pop());
console.log(person1.findTail());
console.log(person1.find(20));
console.log(person1.toString());

