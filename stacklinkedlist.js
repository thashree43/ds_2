class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
    }
    insertdata(data){
        let node = new Node(data)
        node.next = this.head
        this.head = node
    }
    deletedat(data){
        let cur = this.head
        let prev = null
        while (cur) {
            if (prev = null) {
                prev.next = cur.next
            }else{
                this.head= cur.next
            }
            cur = null;
            return
        }
        prev=cur
        cur=cur.next
    }
    print(){
        let cur = this.head
        let ans = ''
        while (cur) {
            ans += cur.data +'->'
            cur= cur.next
        }
        console.log(ans);
    }
}


class stack{
constructor(){
    this.linkedlist = new linkedlist()
}
push(data){
    this.linkedlist.insertdata(data)
}
pop(){
   return this.linkedlist.deletedat()
}
peek(){
    return this.linkedlist.head.data
}
print(){
    this.linkedlist.print()
}
}

let s = new stack()
s.push(7)
s.push(0)
s.push(3)
s.print()


