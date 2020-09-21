function createGrid(size,width,height){
    var canvas = document.getElementById("canvas").getContext("2d");
    canvas.fillStyle="#000000";
    canvas.fillRect(0,0,width,height);
    canvas.save();
    canvas.strokeStyle = "#31ff08";
    for(var i = size;i<width;i+=size){
        canvas.beginPath();
        canvas.moveTo(i,0);
        canvas.lineTo(i,width);
        canvas.moveTo(0,i);
        canvas.lineTo(height,i);
        canvas.stroke();

    }
    canvas.restore();
}
function box(i,j,size){
    var canvas = document.getElementById("canvas").getContext("2d");
    canvas.fillStyle = "#000000";
    canvas.fillRect(i*size+1,j*size+1,size-2,size-2);
}
function box1(i,j,size){
    var canvas = document.getElementById("canvas").getContext("2d");
    canvas.save();
    canvas.fillStyle = "#ffffff";
    canvas.fillRect(i*size+1,j*size+1,size-2,size-2);
    canvas.restore();
}
function box2(i,j,size){
    var canvas = document.getElementById("canvas").getContext("2d");
    canvas.fillStyle = "rgba(255,0,0,0.5)";
    canvas.fillRect(i*size+1,j*size+1,size-2,size-2);
}
function gate(i,right,width){
    var canvas = document.getElementById("canvas").getContext("2d");
    canvas.save();
    //canvas.fillStyle = "#ffffff";
    if(right===true){
        canvas.fillRect(i.x*width+width-1,i.y*width,2,width);
    }else{
        canvas.fillRect(i.x*width,i.y*width+width-1,width,2);
    }
    canvas.restore();

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}