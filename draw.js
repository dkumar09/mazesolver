var xpos = 0;
var ypos = 0;
var size = 50;
var width = 500;
var height = 500;
var cursor = false;
function createGrid(size){
    var canvas = document.getElementById("canvas").getContext("2d");
    for(var i = size;i<width;i+=size){
        canvas.beginPath();
        canvas.moveTo(i,0);
        canvas.lineTo(i,width);
        canvas.moveTo(0,i);
        canvas.lineTo(height,i);
        canvas.stroke();

    }
}
document.addEventListener("keydown",(e)=>{
        //console.log(e.keyCode);
        if(e.keyCode==37){
            xpos-=size;
        }
        if(e.keyCode==38){
            ypos-=size;
        }
        if(e.keyCode==39){
            xpos+=size;
        }
        if(e.keyCode==40){
            ypos+=size;
        }
        if(xpos>=width){
            xpos = width-size;
        }
        if(xpos<=0){
            xpos = 0;
        }
        if(ypos>=height){
            ypos = height - size;
        }
        if(ypos<=0){
            ypos = 0;
        }
        
    });
function nearDir(n,xsize,ysize,r){
    var x = n%xsize;
    var y = Math.floor(n/xsize);
    console.log(y);
    /* 0 -> left
       1 -> up
       2 -> right
       4 -> down
     */
    var dir = [];
    dir.push((x+1)+y*xsize);
    dir.push((x-1)+y*xsize);
    dir.push(x+(y+1)*xsize);
    dir.push(x+(y-1)*xsize);
    if(x==0){
        dir[0] = n;
    }
    if(x==10){
        dir[1] = n;
    }
    if(y==0){
        dir[2] = n;
    }
    if(y==10){
        dir[3] = n;
    }

    return dir;

}
function rnd(){
    var r = Math.floor(Math.random()*4);
    return r;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function connect(i,j,xsize,ysize,size){
    createGrid(50);
    var x1 = (i*size)%xsize;
    var y1 = Math.floor((i*size)/xsize)*size;
    var x2 = (j*size)%xsize;
    var y2 = Math.floor((j*size)/xsize)*size;
    // console.log(x1,y1);
    // console.log(x2,y2);
    var canvas = document.getElementById("canvas").getContext("2d");
    // canvas.beginPath();
    // canvas.moveTo(x1+(size/2),y1+(size/2));
    // canvas.lineTo(x2+(size/2),y2+(size/2));
    // canvas.stroke();

    canvas.fillRect(x1+size/4,x2+size/4,size/2,size/2);
    canvas.fillRect(x2+size/4,y2+size/4,size/2,size/2);

}
function drawG(xsize,ysize,size,g){
    for(var i = 0;i<g.sz();i+=1){
        for(var j = 0;j<g.len(i);j+=1){
            connect(i,g.adj(i)[j],xsize,ysize,size);
        }
    }
}
function draw(){
    var canvas = document.getElementById("canvas").getContext("2d");
    //canvas.clearRect(0,0,width,height);
    canvas.save();
    canvas.fillStyle="#ff0000";
    //canvas.fillRect(0,0,height,width);
    canvas.restore();
    createGrid(size);+
    //move();
    canvas.fillRect(xpos,ypos,size,size);
    //window.requestAnimationFrame(draw);

}
function init(){
    //window.requestAnimationFrame(draw);   
}