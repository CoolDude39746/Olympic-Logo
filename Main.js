Canvas_Variable_1=document.getElementById("Canvas_1");
Context_1=Canvas_Variable_1.getContext("2d");
Color_1="white";
Context_1.beginPath();
Context_1.strokeStyle=Color_1;
Context_1.lineWidth=3;
Context_1.arc(200,200,40,0,2*Math.PI);
Context_1.stroke();
Canvas_Variable_1.addEventListener("mousedown",DuckDuckGoose);

function DuckDuckGoose(e) {
    Color_1=document.getElementById("Input_1").value;
    console.log(Color_1);
    mouse_x=e.clientX-Canvas_Variable_1.offsetLeft;
    mouse_y=e.clientY-Canvas_Variable_1.offsetTop;
    Circle(mouse_x,mouse_y);
}

function Circle(mouse_x,mouse_y) {
Context_1.beginPath();
Context_1.strokeStyle=Color_1;
Context_1.lineWidth=3;
Context_1.arc(mouse_x,mouse_y,40,0,2*Math.PI);
Context_1.stroke();
}

function Clear() {
    Context_1.clearRect(0,0,Canvas_Variable_1.width,Canvas_Variable_1.height);
}