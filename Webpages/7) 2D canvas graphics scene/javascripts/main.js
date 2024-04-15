//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function render() {
    let c = document.querySelector("canvas") //get access to canvas object using document & using querySelector to get a attribute type
    if(c.getContext){ //if we can access the canvas, then do
        let ctx = c.getContext('2d'); //get 2d context
        
        
        ctx.fillStyle = document.getElementById('c').value;
        ctx.beginPath();
        ctx.arc(document.getElementById('x').value, 150, 75, 0, 2 *Math.PI);
        ctx.fill();
    }
}

function randomCircle(){
    let c = document.querySelector("canvas") //get access to canvas object using document & using querySelector to get a attribute type
    if(c.getContext){ //if we can access the canvas, then do
        let ctx = c.getContext('2d'); //get 2d context

        let r = Math.random();

        for(let z = 0; z < 5; z++){
            let x = Math.random()*1000;
            let y = Math.random()*500;

            if(r < .5){
                ctx.fillStyle = document.getElementById('randCirNum').value;
                ctx.beginPath();
                ctx.arc(x, y, 50, 0, 2*Math.PI)
                ctx.fill();
            }
            if(r >=.5){
                ctx.fillStyle = document.getElementById('randCirNum').value;
                ctx.beginPath();
                ctx.arc(x, y, 25, 0, 2*Math.PI)
                ctx.fill();
            }
        }   
    }
}

function scene1(){
    let c = document.querySelector("canvas") //get access to canvas object using document & using querySelector to get a attribute type
    if(c.getContext){ //if we can access the canvas, then do
        let ctx = c.getContext('2d'); //get 2d context
        
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0,0,1000,300);
        ctx.fillStyle = "green";
        ctx.fillRect(0,300,1000,200);
    }
}

function scene2(){
    let c = document.querySelector("canvas") //get access to canvas object using document & using querySelector to get a attribute type
    if(c.getContext){ //if we can access the canvas, then do
        let ctx = c.getContext('2d'); //get 2d context
        
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,1000,300);
        ctx.fillStyle = "darkblue";
        ctx.fillRect(0,300,1000,200);
    }
}

function sceneOption(){
    let r = Math.random();
    if(r < .5){
        scene1();
    }
    else{
        scene2();
    }
}

function clear(){
    let c = document.querySelector("canvas") //get access to canvas object using document & using querySelector to get a attribute type
    if(c.getContext){ //if we can access the canvas, then do
        let ctx = c.getContext('2d'); //get 2d context
        ctx.clearRect(0,0,1000,500)
    }
    sceneOption()
}

function explosion(){
    let c = document.querySelector("canvas") //get access to canvas object using document & using querySelector to get a attribute type
    if(c.getContext){ //if we can access the canvas, then do
        let ctx = c.getContext('2d'); //get 2d context

        for(let z = 0; z < 1000; z++){
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(500, 250, 0+z, 0, 2*Math.PI)
            ctx.fill();
        } 
    }
}

document.body.onload = render  //get access to the body, when the page loads, then do the function

document.getElementById('x').onchange = render;
document.getElementById('c').onchange = render;
document.getElementById('drawRandCir').onclick = randomCircle;
document.getElementById('DESTROY').onclick = explosion;

document.getElementById('clearme').onclick = clear;
sceneOption()

