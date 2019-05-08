class LinkedList {
    head;

    constructor(head) {
        this.head = head;
    }

    append(data) {
        let newHead = new Node(data, this.head);
        this.head = newHead;
    }

    printNodes() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

class Node {
    data;
    next;

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

let headNode = new Node(4, null);

let test = new LinkedList(headNode);
test.append(5);

test.printNodes();
