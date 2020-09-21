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
function coordinate(n){
    var crd=[];
    crd.push(n%50);
    crd.push(Math.floor(n/50));
    return crd;
}
async function dfs(g,v){
    var marked = Array(g.sz());
    var edgeto = Array(g.sz());
    edgeto[0]=v;
    var s = new stack();
    s.push(v);
    var t_prev = v;

    while(!s.isEmpty()){
        var t = s.peek();
        var crd = coordinate(t);
        if(marked[t]===true){
            s.pop();
            box(crd[0],crd[1],10);
        }else{
            marked[t]=true;
        }
        t_prev = t;
        //console.log(t);
        box2(crd[0],crd[1],10);
        if(t===2499){
            break;
        };
        await sleep(1);
        //box(crd[0],crd[1],10);
        for(var i=0;i<g.len(t);i++){
            var l = g.adj(t);
            var m = l[i];
            if(marked[m]!=true){
                edgeto[m]=t;
                s.push(m);                
            }
        }
    }
    console.log(edgeto);
    
}