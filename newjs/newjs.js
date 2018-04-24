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
//onload
var ard=[];
function tab5(){
    //var ar=[];    
  for (var i = 0; i < 20; ++i) {     
     ard[i]=" "+(Math.floor(Math.random()*20)+1);
}
document.getElementById("wypis5").innerHTML=ard;
//document.getElementById("wypis8").innerHTML=ard;
console.log(ard);
}
//end onload
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

//zad 3
var ara=[]
function tab9(){
    //var ar=[];    
  for (var i = 0; i < 20; ++i) {     
     ara[i]=(Math.floor(Math.random()*20)+1);
}
document.getElementById("wypis8").innerHTML=ara;
console.log(ara);
}
function tab10(){ 
    var tabi=ara;//document.getElementById("wypis8").innerHTML;
        
    var max = Number.MIN_VALUE; // albo max = ar[0]
var maxi; // maxi = 0
for (var i = 0; i < 20; ++i) {
if (tabi[i] > max && tabi[i]%2==0) {
max = tabi[i];
maxi = i;
}
}

console.log(tabi);
console.log(max);
console.log(maxi);
document.getElementById("wypis9").innerHTML="wartosc najwieksza: " + max + " na pozycji " + maxi;
}
function tab11(){ 
    //var taba=ara;        
    var min = Number.MAX_VALUE; 
    var tabax=ara;
//var mini; 
var minx=parseFloat(document.getElementById("wart1").value);
var minix;
for (var i = 0; i < 20; ++i) {
if (tabax[i]>minx && tabax[i]<min) {
min = tabax[i];
minix = i;
}
}

//console.log(taba);
//console.log(min);
//console.log(mini);
//document.getElementById("wypis10").innerHTML="wartosc najmniejsza: " + min + " na pozycji " + mini;
console.log(document.getElementById("wart1").value);
console.log(tabax);
console.log(min);
console.log(minix);
document.getElementById("wypis11").innerHTML="wartosc najmniejsza większa od x: " + min + " na pozycji " + minix;
}