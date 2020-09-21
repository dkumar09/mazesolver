var i=0;
var j=0;
var Vector = function(x,y){
    this.x = x;
    this.y = y;
}
function drawPolygon(p){
    var canvas  = document.getElementById("canvas").getContext("2d");
    if(p===null||p===undefined||p.length ===0){
        return;
    }else{
        canvas.beginPath();
        canvas.moveTo(p[0].x,p[0].y);
        p.forEach(element => {
            canvas.lineTo(element.x,element.y);
        });
        canvas.lineTo(p[0].x,p[0].y);
        canvas.stroke();
    }
}

function begin(){
    console.log("sanity check");
    //window.requestAnimationFrame(draw);

}
function mouseUpdate(x,y){
    //console.log(x,y);
    i=x;
    j=y;

}
document.addEventListener("mousemove",(e)=>{
    mouseUpdate(e.clientX,e.clientY);  
})
function draw(){
    var canvas  = document.getElementById("canvas").getContext("2d");
    canvas.clearRect(0,0,500,500);
    p = [new Vector(1,2),new Vector(100,10),new Vector(180,150)];
    drawPolygon(p);
    canvas.fillRect(i-5,j-5,10,10);
    window.requestAnimationFrame(draw);
}
