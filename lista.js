function jaki_przycisk(e) {
  var a = event.keyCode;
  console.log(String.fromCharCode(a));
  document.getElementById('kod').innerHTML= a;
}

var c=document.getElementById('obraz');
var ctx=c.getContext('2d');
ctx.beginPath();
ctx.arc(100,75,50,1*Math.PI,1.5*Math.PI);
ctx.stroke();



var x =0;
var y =0;


var c = document.getElementById("obraz");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);

function rysuj() {
ctx.lineTo(x,y);
ctx.stroke();
x++;
y++;
setTimeout(rysuj, 50);
}


$('div.praca').hide().fadeIn(2000);


//rysuj();

document.getElementById('przycisk').addEventListener('keypress', jaki_przycisk, false);
