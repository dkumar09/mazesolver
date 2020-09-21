function join(c,size){
    var i = c.coord.x;
    var j = c.coord.y;
    var a = [];
    if(c.right===true){
        a.push(j*size+i);
        a.push(j*size+i+1);
    }
    if(c.bottom==true){
        a.push(j*size+i);
        a.push((j+1)*size+i);

    }
    return a;
}
var appendGraph = (br,g)=>{
    var n = br.size;
    for(var i = 0;i<n;i++){
        for(var j = 0;j<n;j++){
            var tmp = br.board[i][j];
            var a = join(tmp,n);
            if(a.length>0){
                g.addEdge(a[0],a[1]);
                if(a.length>2){
                    g.addEdge(a[2],a[3])  
                }
            }
        }
    }
    console.log(g.toString());
    dfs(g,0);
}

function begin(){
    var width = 500;
    var height = 500;
    var bx_size = 10;
    var n = width/bx_size;
    console.log("hahah this go brr");
    var br = new board(n);
    // var l = nList(2,2,n,b);
    // var r = next(l);
    // console.log(l);
    // console.log(r);
    bt(0,0,br,n,appendGraph);
    //br.printBoard();
    createGrid(bx_size,width,height);
}