class cell{
    constructor(x,y){
        this.right = false;
        this.bottom = false;   
        this.visited = false;
        this.coord = {
            x:x,
            y:y
        };
    }
}
//board initialization
class board{
    constructor(n){
        this.size = n;
        this.board = [];
        for(var i = 0;i<n;i++){
            var tmp = [];
            for(var j = 0;j<n;j++){
                tmp.push(new cell(i,j));
            }
            this.board.push(tmp);
        }
    }
    //check visited 
    isVisited(i,j){
        return this.board[i][j].visited===true;
    }
    //used for wall construction
    connect(i,j){
        if((i.x+1)===j.x){
            i.right=true;
        }else{
            this.bottom = true;
        }
    }
    setVisit(x,y){
        this.board[x][y].visited = true;
    }
    printBoard(){
        this.board.forEach(arr=>{
            var tmp=[];
            arr.forEach(i=>{
                tmp.push(i.coord);
            });
            console.log(tmp);
        });
    }
}
//return unvisited neighbour list
function nList(i,j,n,b){
    var list = [];
    list.push({
        x:i+1,
        y:j
    });
    list.push({
        x:i,
        y:j+1
    });
    list.push({
        x:i-1,
        y:j
    });
    list.push({
        x:i,
        y:j-1
    });
    if(i<=0){
        list[2]=null;
    }
    if(j<=0){
        list[3]=null;
    }
    if(i>=n-1){
        list[0]=null;
    }
    if(j>=n-1){
        list[1]=null;
    }
    var tmp = [];
    list.forEach(l=>{
        if(l!==null){
            if(b.isVisited(l.x,l.y)===false){
                tmp.push(l);
            }
        }
    })
    return tmp;
}
//return next random neighbour
function next(l){
    if(l===[]){
        return null;
    }
    var r = Math.floor(Math.random()*l.length);
    return l[r];
}
async function bt(x,y,b,n){
    b.setVisit(x,y);
    await sleep(100);
    box(x,y,20);
    var nxt = next(nList(x,y,n,b));
    if(nxt!=null){
        b.connect({x:x,y:y},nxt);
        console.log(x,y);
        bt(nxt.x,nxt.y,b,n);
    }
}
function begin(){
    var width = 500;
    var height = 500;
    var bx_size = 20;
    var n = width/bx_size;
    console.log("hahah this go brr");
    var br = new board(n);
    // var l = nList(2,2,n,b);
    // var r = next(l);
    // console.log(l);
    // console.log(r);
    bt(5,5,br,n);
    //br.printBoard();
    createGrid(bx_size,width,height);
}