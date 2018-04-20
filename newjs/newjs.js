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
var ard=[];
function tab5(){
    //var ar=[];    
  for (var i = 0; i < 20; ++i) {     
     ard[i]=" "+(Math.floor(Math.random()*10)+1);
}
document.getElementById("wypis5").innerHTML=ard;
console.log(ard);
}

function tab6(){ 
    var tab=ard;
    tab.reverse(); 
    
console.log(tab);
document.getElementById("wypis6").innerHTML=tab;
}
function tab7(){
    var tabu=ard;
    for (var i = 0; i < 20; ++i) {
        //if(i%2=0){
    tabu.splice(i, 1)
        //}
    }
console.log(tabu);
document.getElementById("wypis7").innerHTML=tabu;   
}
