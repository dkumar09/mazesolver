var cell = function(){
    this.visited = false;
    this.walls = 0;
}
cell.walls = {
    DOWN : false,
    RIGHT : false
};
cell.dummy = new cell();
var board = function(){
    this.grid = [];
}
board.prototype.init = function(n){
    for(var i = 0;i<n;i++){
        var v = [];
        for(var j = 0;j<n;j++){
            v.push(new cell());
        }
        this.grid.push(v);
    }
}
board.prototype.print = function(n){
    var s = "";
    for(var i = 0;i<n;i++){
        for(var j=0;j<n;j++){
            s+=this.grid[i][j].visited+" ";
        }
        s+="\n";
    }
    console.log(s);
}
var b = new board();
b.init(10);
b.print(10); 