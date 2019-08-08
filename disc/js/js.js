/* Super avançado*/


let player = document.querySelector('div#jogador')
player.innerHTML = '<img src="disc/img/pe.png" alt="jogador">'

let maquina = document.querySelector('div#computador')
maquina.innerHTML = '<img src="disc/img/pe2.png" alt="computador">'

/* 
let pe =document.querySelector('div#pe') 
let pa =document.querySelector('div#pa')
let te =document.querySelector('div#te')
*/
let player1 = ''
function pe(){
player1 = 0	
let jogadaaleatoria = Math.floor(Math.random() * 3)
if(player1 == 0 && jogadaaleatoria == 0){
 player.innerHTML = '<div class="bordaempate"><img src="disc/img/pe.png" alt="jogador"></div>'
 maquina.innerHTML = '<div class="bordaempate"><img src="disc/img/pe2.png" alt="computador"></div>'	
 maquina.innerHTML += '<p id="res">Empate</p>'
 player.innerHTML += '<p id="res">Empate</p>'
 }else if(player1 == 0 && jogadaaleatoria == 1){
  player.innerHTML = '<div class="bordaperdedor"><img src="disc/img/pe.png" alt="jogador"></div>'
  maquina.innerHTML = '<div class="bordaganhador"><img src="disc/img/pa2.png" alt="computador"></div>'
  maquina.innerHTML += '<p id="res">Computador Ganhou</p>'
 }else if(player1 == 0 && jogadaaleatoria == 2){
  player.innerHTML = '<div class="bordaganhador"><img src="disc/img/pe.png" alt="jogador"></div>'
  maquina.innerHTML = '<div class="bordaperdedor"><img src="disc/img/te2.png" alt="computador"></div>'
  player.innerHTML += '<p id="res">Jogador Ganhou</p>'
 }

}

function pa(){
player1 = 1	
let jogadaaleatoria = Math.floor(Math.random() * 3)
if(player1 == 1 && jogadaaleatoria == 1){
 player.innerHTML = '<div class="bordaempate"><img src="disc/img/pa.png" alt="jogador"></div>'
 maquina.innerHTML = '<div class="bordaempate"><img src="disc/img/pa2.png" alt="computador"></div>'	
 maquina.innerHTML += '<p id="res">Empate</p>'
 player.innerHTML += '<p id="res">Empate</p>'
 }else if(player1 == 1 && jogadaaleatoria == 0){
  player.innerHTML = '<div class="bordaganhador"><img src="disc/img/pa.png" alt="jogador"></div>'
  maquina.innerHTML = '<div class="bordaperdedor"><img src="disc/img/pe2.png" alt="computador"></div>'
  player.innerHTML += '<p id="res">Jogador Ganhou</p>'
 }else if(player1 == 1 && jogadaaleatoria == 2){
  player.innerHTML = '<div class="bordaperdedor"><img src="disc/img/pa.png" alt="jogador"></div>'
  maquina.innerHTML = '<div class="bordaganhador"><img src="disc/img/te2.png" alt="computador"></div>'
  maquina.innerHTML += '<p id="res">computador Ganhou</p>'
 }

}

function te(){
player1 = 2	
let jogadaaleatoria = Math.floor(Math.random() * 3)
if(player1 == 2 && jogadaaleatoria == 2){
 player.innerHTML = '<div class="bordaempate"><img src="disc/img/te.png" alt="jogador"></div>'
 maquina.innerHTML = '<div class="bordaempate"><img src="disc/img/te2.png" alt="computador"></div>'	
 maquina.innerHTML += '<p id="res">Empate</p>'
 player.innerHTML += '<p id="res">Empate</p>'
 }else if(player1 == 2 && jogadaaleatoria == 1){
  player.innerHTML = '<div class="bordaganhador"><img src="disc/img/te.png" alt="jogador"></div>'
  maquina.innerHTML = '<div class="bordaperdedor"><img src="disc/img/pa2.png" alt="computador"></div>'
  player.innerHTML += '<p id="res">Jogador Ganhou</p>'
 }else if(player1 == 2 && jogadaaleatoria == 0){
  player.innerHTML = '<div class="bordaperdedor"><img src="disc/img/te.png" alt="jogador"></div>'
  maquina.innerHTML = '<div class="bordaganhador"><img src="disc/img/pe2.png" alt="computador"></div>'
  maquina.innerHTML += '<p id="res">computador Ganhou</p>'
 }

}
