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
class graph{
    constructor(n){
        this.size = n;
        this.g = [];
        for(var i = 0;i<n;i++){
            this.g.push([]);
        }
    }
    printG(){
        console.log(this.g);
    }
    sz(){
        return this.g.length;
    }
    adj(w){
        //console.log(this.g);
        return this.g[w];
    }
    addEdge(v,w){
        this.g[v].push(w);
        this.g[w].push(v);
    }
    len(v){
        return this.g[v].length;
    }
    getG(){
        return this.g;
    }
    toString(){
        var s = "";
        for(var i = 0; i<this.sz();i++){
            s+=i+" : ";
            for(var j = 0;j<this.len(i);j++){
                s+=this.g[i][j]+" ";
            }
            s+="\n";
        }   
        return s;
    }
}
console.log("yo");
async function dfs(g,v){
    var marked = Array(g.sz());
    var s = new stack();
    s.push(v);
    var t_prev = v;

    while(!s.isEmpty()){
        //console.log(s);
        var t = s.peek();
        if(marked[t]===true){
            s.pop();
        }else{
            marked[t]=true;
        }
        console.log(t);
        connect(t,t_prev,500,500,50)
        t_prev = t;
        for(var i=0;i<g.len(t);i++){
            //console.log("t is"+t);
            var l = g.adj(t);
            //console.log("l is "+l,"i is "+i);
            var m = l[i];
            if(marked[m]!=true){
                s.push(m);
                
            }
            //await sleep(200);
        }
    }
}
function nxt(t,marked){
    console.log(t);
    if(marked[t+1]===false){
        return t+1;
    }
    return null;
}
function dfsgen(g,v){
    var marked = Array(g.sz());
    var s = new stack();
    s.push(v);
    var t_prev = v;

    while(!s.isEmpty()){
        console.log(s);
        var t = s.peek();
        if(marked[t]===true){
            s.pop();
        }else{
            marked[t]=true;
        }
        console.log(t);
        t = nxt(t,marked);
        console.log(t);
        while(nxt(t,marked) === null&&nxt(t,marked)!==undefined){
            s.pop();
            t = s.peek();
        }
        
    }

}
function neigh(v,marked,xsize){
    var t = nearDir(v,xsize,xsize,0);
    console.log(t);
    if(!marked[t[0]]&&t[0]!=v){
        return t[0];
    }
    if(!marked[t[1]]&&t[1]!=v){
        return t[1];
    }
    if(!marked[t[2]]&&t[2]!=v){
        return t[2];
    }
    if(!marked[t[3]]&&t[3]!=v){
        return t[3];
    }
    return null;


}
function dfsutil(g,v,marked){
    marked[v]=true;
    var x = neigh(v,marked,10);
    //console.log(x,v);
    if((x!=null)&&(x!=undefined)){
        connect(v,x,500,500,50);
        //g.addEdge(x,v);
        dfsutil(g,x,marked);
    }
}
function dfsgen2(g,v){
    var marked = Array(g.sz());
    for(var i = 0;i<g.sz();i++){
        marked[i]=false;
    }
    dfsutil(g,v,marked);


}