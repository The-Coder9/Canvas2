var mouse_event = "";
var last_x, last_y;
color = "red";
width_of_line = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_x = e.clientX-canvas.offsetLeft;
    current_y = e.clientY-canvas.offsetTop;
    
    if(mouse_event=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_postion_of_mouse_y, radius , 0, 2 * Math.PI);
    ctx.stroke();

    console.log("last position of x and y is = ");
    console.log("x ="+last_x+"y ="+last_y);
    ctx.moveTo(last_x, last_y);

    console.log("current position of x and y is = ");
    console.log("x ="+current_x+"y ="+current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}