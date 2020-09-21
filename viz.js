function begin(){
var n=10;
var g = new graph(100);
g.addEdge(0, 10);
g.addEdge(10, 11);
g.addEdge(11, 22);
g.addEdge(13, 10);
g.addEdge(31, 10);
g.addEdge(31,32);
g.addEdge(31,33);
console.log(g.toString());
g.printG();
//drawG(500,500,50,g)
dfsgen(g,0);
//draw();
}

