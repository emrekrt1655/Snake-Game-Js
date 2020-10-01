window.onload=function() {
    canv=document.getElementById("gameplace");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(snakeGame,1000/12);
}
px=py=15;
gs=tc=20;
ax=ay=15;
xv=yv=0;
footprint=[];
tail = 5;
function snakeGame() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="gray";
    for(var i=0;i<footprint.length;i++) {
        ctx.fillRect(footprint[i].x*gs,footprint[i].y*gs,gs-2,gs-2);
        if(footprint[i].x==px && footprint[i].y==py) {
            tail = 5;
        }
    }
    footprint.push({x:px,y:py});
    while(footprint.length>tail) {
    footprint.shift();
    }
 
    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="lime";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(dx) {
    switch(dx.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
};