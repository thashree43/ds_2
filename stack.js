class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.item = []
    }
    push(data){
        this.item.push(data)
    }
    pop(){
       return this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    print(){
        console.log(this.item.join('->'));
    }
}

const st = new Stack()
st.push(4)
st.push(0)
st.push(9)
st.push(1)
st.print()
console.log(st.peek()); 
st.pop()
st.print()

class Queue{
    constructor(){
        this.item =[]
    }
    pop(data){
        this.item.push(data)
    }
    shift(){
        return this.item.shift()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    print(){
        console.log(this.item.join('->'));
    }
}

let qu = new Queue()
qu.pop(4)
qu.pop(5)
qu.pop(6)
qu.pop(7)
qu.print()
qu.shift()
qu.print()

