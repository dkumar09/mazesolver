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
        var bx = 10;
        if((i.x+1)===j.x){
            this.board[i.x][i.y].right = true;
            gate(i,true,bx);
        }else if((i.y+1)===j.y){
            this.board[i.x][i.y].bottom = true;
            gate(i,false,bx);
        }else if((j.x+1)===i.x){
            this.board[j.x][j.y].right = true;
            gate(j,true,bx);
        }else{
            this.board[j.x][j.y].bottom = true;
            gate(j,false,bx);
        }
        //console.log(i,j);
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
    var r = Math.floor(random()*l.length);
    return l[r];
}
async function bt(x,y,b,n,callback){
    // b.setVisit(x,y);
    // await sleep(100);
    // box(x,y,20);
    // var nxt = next(nList(x,y,n,b));
    // if(nxt!=null){
    //     b.connect({x:x,y:y},nxt);
    //     console.log(x,y);
    //     bt(nxt.x,nxt.y,b,n);
    // } 
    // var tmp = nList(x,y,n,b);
    // box(x,y,20)
    // while(tmp!==[]){
    //     tmp = nList(x,y,n,b);
    //     if(tmp.length===0){
    //         break;
    //     }
    //     var nxt = tmp[tmp.length-1];
    //     // tmp.pop();
    //     console.log(nxt);
    //     if(!b.isVisited(nxt.x,nxt.y)){
    //         b.connect({x:x,y:y},nxt);
    //         console.log(x,y);
    //         bt(nxt.x,nxt.y,b,n);
    //     }
    // }
    var s = [];
    s.push({x:x,y:y});
    b.setVisit(x,y);
    while(s.length>0){
        var tmp = s.pop();
        var nxt = next(nList(tmp.x,tmp.y,n,b));
        if(nxt!=null){
            s.push(tmp);
            b.connect(tmp,nxt);
            b.setVisit(nxt.x,nxt.y);
            box1(nxt.x,nxt.y,10);
            await sleep(1);
            box(nxt.x,nxt.y,10);
            s.push(nxt);
        } 
    }
    var g = new graph(Math.pow((500/10),2));
    //console.log(b);
    //console.log(g);
    callback(b,g)

}