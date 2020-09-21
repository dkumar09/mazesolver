class stack{
    constructor(){
        this.s = [];
        this.index=0;
    }
    push(v){
        this.s.push(v);
        this.index+=1;
    }
    pop(){
        this.index-=1;
        return this.s.pop();
    }
    peek(){
        var x = this.pop();
        this.push(x);
        return x;
    }
    printStack(){
        console.log("s is" + this.s);
    }
    isEmpty(){
        return this.index<=0;
    }
}