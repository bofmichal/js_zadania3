// zad 1
function tab1(){
    var ar=[];
    var str="";
 var los;
  for (var i = 0; i < 20; ++i) {
     los=(Math.floor(Math.random()*10)+1);
     str += los + ", ";
     ar[i]=" "+(Math.floor(Math.random()*10)+1);
}
document.getElementById("wypis1").innerHTML=ar;
}
function tab2(){
    var ar=[];    
   for (var i = 0; i < 20; ++i) {    
     ar[i]=-1-i;
}
document.getElementById("wypis2").innerHTML=ar;
}

function tab3(){
    var ar=[];    
   for (var i = 0; i < 21; ++i) {    
     ar[i]=" "+i/20;
}
document.getElementById("wypis3").innerHTML=ar;
}

function tab4(){
    var ar=[];    
   for (var i = 0; i < 20; ++i) {    
     ar[i]=Math.pow(2,(i+1));;
}
document.getElementById("wypis4").innerHTML=ar;
}

//zad 2