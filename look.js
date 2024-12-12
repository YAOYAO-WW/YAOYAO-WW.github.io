var b = false;
var obj;
function f(){
    if(b){
        obj = document.getElementsByClassName("a");
        for(var i = 0;i<obj.length;i++){
        obj[i].style.display = "none";
        }
        b = false;
    }
    var sel = document.getElementById("drop").value;
    if(sel === "bmi") bmi();
    if(sel === "random") rand();
    if(sel === "mpg") mpg();
    if(sel === "fake") fake();
    if(sel === "fish") fish()
    if(sel ==="pill") pill();
    b = true;
}
function bmi(){
    
    document.getElementById("in1").style.display = "block";
    document.getElementById("in2").style.display = "block";
    document.getElementById("btn0").style.display = "block";
    document.getElementById("l1").style.display = "block";
    document.getElementById("l2").style.display = "block";
    document.getElementById("l1").innerHTML = "Weight in kg";
    document.getElementById("l2").innerHTML = "Height in cm";
    document.getElementById("btn0").setAttribute("onclick","calcbmi()");
    document.getElementById("r").style.display = "block";
    document.getElementById("r").innerHTML = "result";

}
function calcbmi(){
    var w = parseFloat(document.getElementById("in1").value);
    var h = parseFloat(document.getElementById("in2").value);
    var r = w / (h*h) *10000;
    document.getElementById("r").innerHTML = r;
    if(r<=0) document.getElementById("r").innerHTML = "Invalid";
}
function rand(){
    var v = document.getElementById("r");
    v.style.display = "block";
    v.innerHTML = Math.random();
    
}
function mpg(){
    document.getElementById("in1").style.display = "block";
    document.getElementById("r").innerHTML = "result";
    document.getElementById("l1").style.display = "block";
    document.getElementById("l1").innerHTML = "Input MPG";
    document.getElementById("in1").setAttribute("onkeyup","calcmpg()");
    document.getElementById("r").style.display = "block";
}
function calcmpg(){
    document.getElementById("r").innerHTML = 282.48/parseFloat(document.getElementById("in1").value);
}
function fake(){
    window.open("https://thispersondoesnotexist.com/")
}
function fish(){
    var p = document.getElementById("pic");
    p.style.display = "block";
    p.style.width = "600px";
    p.setAttribute("src","https://www.daoistmusichk.org/sites/default/files/2016-12/%E6%9C%A8%E9%AD%9Atransparent.png");
    document.getElementById("btn0").setAttribute("onclick","fishclick()");
    document.getElementById("btn0").style.display = "block";
}
function fishclick(){
    var p = document.getElementById("pic");
    p.style.width = "550px";
    p.style.marginBottom = "22px";
    setTimeout(() => { p.style.width = "600px";p.style.marginBottom = "0px"  }, 10);
}
function pill(){
    document.getElementById("in1").style.display = "block";
    document.getElementById("in2").style.display = "block";
    document.getElementById("btn0").style.display = "block";
    document.getElementById("l1").style.display = "block";
    document.getElementById("l2").style.display = "block";
    document.getElementById("l1").innerHTML = "How many pill you have";
    document.getElementById("l2").innerHTML = "How many to take per day";
    document.getElementById("btn0").setAttribute("onclick","calcpill()");
    document.getElementById("r").style.display = "block";
    document.getElementById("r").innerHTML = "result";
}
function calcpill(){
    var w = parseFloat(document.getElementById("in1").value);
    var h = parseFloat(document.getElementById("in2").value);
    var r = w/h;
    document.getElementById("r").innerHTML = parseInt(r) + " days left.";
    if(r<=5) document.getElementById("r").innerHTML = document.getElementById("r").innerHTML + " Refill ASAP";
    if(r<=0) document.getElementById("r").innerHTML = "Invalid";
}