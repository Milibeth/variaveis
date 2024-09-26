const prompt = require('prompt-sync')
const entrada = prompt()

let anoAtual = 2024;
const nomeCompleto = "Milibeth Garcia";
let idade = 17;
const cursoFaculdade = "Ciência da Computação";
let cidadeAtual = "São Jośe dos Pinhais"

console.log(`Olá eu sou a ${nomeCompleto}, eu tenho ${idade} anos, eu moro em ${cidadeAtual} e quero ano que vem estar cursando ${cursoFaculdade}.`);

 anoAtual = 2025;

idade = 18;
cidadeAtual = "Barcelona"

console.log(`Olá eu sou a ${nomeCompleto}, eu tenho ${idade} anos, eu moro em ${cidadeAtual} e estou cursando  ${cursoFaculdade} na Universitat Barcelona.`);


console.log(anoAtual);

//Agência de Viagens

var nomeComprador = entrada("Qual é seu nome?");
var cpfComprador = entrada("Qual é seu cpf?");
var idadeComprador = entrada ("Qual sua idade?")
const listaDeDestinos = new Array(
  " Barcelona", 
  " Roma",
  " Paris",
  " Cancun",
  " Florida"  
);

console.log(`Olá, senhora ${nomeComprador}, portadora do cpf ${cpfComprador}, informados que sua passagem para ${listaDeDestinos}, está disponível para compra.`);

console.log(listaDeDestinos[3]);
console.log("");
console.log(`Olá senhor ${nomeComprador} adicionamos mais uma viagem a sua lista de interesses.`);

listaDeDestinos.push("Roma");

if(idadeComprador<18){
  console.log(`Infelizmente não podemos lhe vender uma passagem,pois o senhor é menor de idade`)
}
if(idadeComprador>18){
  console.log(`Parabéns, sua compra foi foi confirmada!, por favor verificar a passagem para ${listaDeDestinos}.`)
}