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
    var min = Number.MAX_VALUE; 
    var tabax=ara;
var minx=parseFloat(document.getElementById("wart1").value);
var minix;
for (var i = 0; i < 20; ++i) {
if (tabax[i]>minx && tabax[i]<min) {
min = tabax[i];
minix = i;
}
}
console.log(document.getElementById("wart1").value);
console.log(tabax);
console.log(min);
console.log(minix);
document.getElementById("wypis11").innerHTML="wartosc najmniejsza większa od x: " + min + " na pozycji " + minix;
}
//zad4
var pomidor=[];
function tablica1(){
    //var ar=[];    
  for (var i = 0; i < 20; ++i) {     
     pomidor[i]=(Math.floor(Math.random()*20)+1);
}
document.getElementById("wynik1").innerHTML=pomidor;
console.log(pomidor);
}
function tablica2(){
    var tabliczka1=pomidor;//document.getElementById("wynik1").innerHTML;
    var wartosc1=parseFloat(document.getElementById("wart2").value);
    var wartosc2=parseFloat(document.getElementById("wart3").value);
    var sum=0;
    var ile=0;
    
    for (var i = 0; i < 20; ++i) {
        if (tabliczka1[i]>=wartosc1 && tabliczka1[i]<=wartosc2) {
        //sum = tabliczka1[i];
        ile++;
        }
        }
        if(isNaN(wartosc1) || isNaN(wartosc2) || wartosc1<0 || wartosc2>20){
            alert("wpisz wartość rzeczywistą liczby z przedziału od 1 do 20")
        }
    console.log(pomidor);
    //console.log(sum);
    console.log(ile);
    document.getElementById("wynik2").innerHTML="We wskazanym przedziale jest "+ile+" wartości";
}
function tablica3(){
    var tabliczka2=pomidor;//document.getElementById("wynik1").innerHTML;
    var ile=0;
    
    for (var i = 0; i < 20; ++i) {
        if (tabliczka2[i]%2!=0) {
        //sum = tabliczka1[i];
        ile++;
        }
        }
        
    console.log(pomidor);
    //console.log(sum);
    console.log(ile);
    document.getElementById("wynik3").innerHTML="Jest "+ile+" nieparzystych wartości";
}
//zad 5
var kalafior=[];
function tablica4(){       
  for (var i = 0; i < 20; ++i) {     
     kalafior[i]=(Math.floor(Math.random()*20)+1);
}
document.getElementById("wynik4").innerHTML=kalafior;
console.log(kalafior);
}
function tablica5(){
    var tabliczka3=kalafior;
    var sum=0;
    var wartosc3=parseFloat(document.getElementById("wart4").value);    
    for (var i = 0; i < 20; ++i) {
        if (tabliczka3[i]>wartosc3) {
        sum += tabliczka3[i];
        ile++;
        }
        }
        if(isNaN(wartosc3) || wartosc3<0 || wartosc3>20){
            alert("wpisz wartość rzeczywistą liczby z przedziału od 1 do 20");
        }
        
        console.log(kalafior);
    console.log(sum);
    console.log(ile);
    document.getElementById("wynik5").innerHTML="suma liczb większych od "+wartosc3+" daje "+sum;
    }
    function tablica6(){
        var tabliczka4=kalafior;
        var ile=0;
        var sum=0;
        var wartosc4=5;    
        for (var i = 0; i < 20; ++i) {
            if (tabliczka4[i]%2 != 0 && tabliczka4[i]%5 != 0) {
            sum += tabliczka4[i];
            ile++;
            }
            }
            
            
            console.log(kalafior);
        console.log(sum);
        console.log(ile);
        document.getElementById("wynik6").innerHTML="suma liczb nieparzystych to "+sum;
        }
        //zad6
        function tablica7(){ 
            for (var i = 0; i < 20; ++i) {     
                kalafior[i]=(Math.floor(Math.random()*20)+1);
           }
           document.getElementById("wynik7").innerHTML=kalafior;
           console.log(kalafior)
          
          }
          function tablica8(){
            var tabliczka5=kalafior;            
            for (var i = 0; i < 20; i+=2) {
                tabliczka5[i]=tabliczka5[i]/2;
                
                }
                
                document.getElementById("wynik8").innerHTML= tabliczka5;
           console.log(tabliczka5);
          }
          function tablica9(){
            var tabliczka6=kalafior;                
            for (var i = 0; i < 20; ++i) {
                if (tabliczka6[i]%2 != 0) {
                tabliczka6[i]=tabliczka6[i]*3+1;
                
                }
                }
                
                
                console.log(tabliczka6);            
            document.getElementById("wynik9").innerHTML=tabliczka6;
            }
            function tablica10(){ 
                for (var i = 0; i < 20; ++i) {     
                    kalafior[i]=(Math.floor(Math.random()*20)+1);
               }
               document.getElementById("wynik10").innerHTML=kalafior;
               console.log(kalafior)
              
              }