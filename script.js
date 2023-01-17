let numerodecartas=prompt("Quantas cartas você quer?");
let contador=0;
let carta1;
let carta2;

while(numerodecartas%2!==0 || numerodecartas<=2 || numerodecartas>14 ){
   numerodecartas=prompt("Número inválido, digite um número par entre 2 e 14.");
}

adicionarcarta()


function adicionarcarta(){
   
   const gifs=[`<li class="carta um" onclick="virada()"><img class="back ichi" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif am virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif"></li>`,`<li class="carta dois"  onclick="viradad()"><img class="back ni" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif ds virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif"></li>`,`<li class="carta tres" onclick="viradat()"><img class="back san" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"> <img class="gif trs virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif"></li>`,`<li class="carta quatro" onclick="viradaq()"><img class="back yon" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif qtr virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif"></li>`,`<li class="carta cinco" onclick="viradac()"><img class="back go" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif cnc virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/mobile.png"></li>`,`<li class="carta seis" onclick="viradass()"><img class="back roku" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif sis virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/revertitparrot.gif"></li>`,`<li class="carta sete" onclick="viradast()"><img class="back nana" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif set virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/tripletsparrot.gif"></li>`];
   const gifs2=[`<li class="carta um" onclick="virada1()"><img class="back ichi1" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif am1 virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif"></li>`,`<li class="carta dois"  onclick="viradad2()"><img class="back ni2" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif ds2 virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif"></li>`,`<li class="carta tres" onclick="viradat3()"><img class="back san3" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"> <img class="gif trs3 virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif"></li>`,`<li class="carta quatro" onclick="viradaq4()"><img class="back yon4" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif qtr4 virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif"></li>`,`<li class="carta cinco" onclick="viradac5()"><img class="back go5" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif cnc5 virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/mobile.png"></li>`,`<li class="carta seis" onclick="viradass6()"><img class="back roku6" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif sis6 virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/revertitparrot.gif"></li>`,`<li class="carta sete" onclick="viradast7()"><img class="back nana7" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"><img class="gif set7 virada" src="./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/tripletsparrot.gif"></li>`];

   const elemento = document.querySelector("ul");
   let novonumero=(numerodecartas/2)
   const array=[];
   
   for(let indice=0;indice<novonumero;indice++){
  
   array.push( gifs[indice]);
   array.push(gifs2[indice]);
   }
   array.sort(comparador);
  elemento.innerHTML = elemento.innerHTML + array;
 
}

function conta(){
   const seletor=document.querySelector('.carta')
   contador++;
  console.log(contador)
   if(contador===1){
   return
   }else if(contador===2 && carta1===carta2){

     console.log('igual')
     contador=0;
   }else{
      
      desvirada();
      contador=0;
   }

}
function desvirada(){
   document.querySelectorAll('.virada')
}

function virada(){
   carta1='ichi';
   console.log(carta1);
   const carta=document.querySelector('.ichi');
   carta.classList.add('virada');
   const gif=document.querySelector('.am');
   gif.classList.remove('virada'); 
   conta()
   const pai=carta.parentNode;
   pai.classList.add('.escolhida')
   
}

function virada1(){
   carta2='ichi';
   console.log(carta2)
   const carta=document.querySelector('.ichi1');
   carta.classList.add('virada');
   const gif=document.querySelector('.am1');
   gif.classList.remove('virada');
   conta()
}
function viradad(){
   carta1='ni';
   const carta=document.querySelector('.ni');
   carta.classList.add('virada');
   const gif2=document.querySelector('.ds');
   gif2.classList.remove('virada');
   conta()
}
function viradad2(){
   carta2='ni';
   const carta=document.querySelector('.ni2');
   carta.classList.add('virada');
   const gif2=document.querySelector('.ds2');
   gif2.classList.remove('virada');
   conta()
}
function viradat(){
   carta1='san'
   const carta=document.querySelector('.san');
   carta.classList.add('virada');
   const gif=document.querySelector('.trs');
   gif.classList.remove('virada');
   conta()
}
function viradat3(){
   carta2='san'
   const carta=document.querySelector('.san3');
   carta.classList.add('virada');
   const gif=document.querySelector('.trs3');
   gif.classList.remove('virada');
   conta()
}
function viradaq(){
   carta1='yon'
   const carta=document.querySelector('.yon');
   carta.classList.add('virada');
   const gif=document.querySelector('.qtr');
   gif.classList.remove('virada');
   conta()
}
function viradaq4(){
   carta2='yon'
   const carta=document.querySelector('.yon4');
   carta.classList.add('virada');
   const gif=document.querySelector('.qtr4');
   gif.classList.remove('virada');
   conta()
}
function viradac(){
   carta1='go'
   const carta=document.querySelector('.go');
   carta.classList.add('virada');
   const gif=document.querySelector('.cnc');
   gif.classList.remove('virada');
   conta()
}
function viradac5(){
   carta2='go'
   const carta=document.querySelector('.go5');
   carta.classList.add('virada');
   const gif=document.querySelector('.cnc5');
   gif.classList.remove('virada');
   conta()
}
function viradass(){
   carta1='roku'
   const carta=document.querySelector('.roku');
   carta.classList.add('virada');
   const gif=document.querySelector('.sis');
   gif.classList.remove('virada');
   conta()
}
function viradass6(){
   carta2='roku'
   const carta=document.querySelector('.roku6');
   carta.classList.add('virada');
   const gif=document.querySelector('.sis6');
   gif.classList.remove('virada');
   conta()
}
function viradast(){
   carta1='nana'
   const carta=document.querySelector('.nana');
   carta.classList.add('virada');
   const gif=document.querySelector('.set');
   gif.classList.remove('virada');
   conta()
}
function viradast7(){

   carta2='nana'
   const carta=document.querySelector('.nana7');
   carta.classList.add('virada');
   const gif=document.querySelector('.set7');
   gif.classList.remove('virada');
   conta()
}
function comparador() { 
	return Math.random() - 0.5; 
}