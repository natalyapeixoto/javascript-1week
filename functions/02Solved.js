// Escreva uma função
// em Javascript que recebe
// um nome, um pronome e um objeto
// e retorna "<nome> foi caminhar
// no parque. <pronome> encontrou
// <objeto>. <nome> decidiu levar
// <objeto> pra casa."
function frase (nome, pron, obj) {
	return `${nome} foi caminhar no parque. ${pron} encontrou ${obj}. ${nome} decidiu levar ${obj} para casa.`
}



// Escreva uma função
// em Javascript que recebe
// um número qualquer e retorna
// a raiz quadrada dele.
function RaizQuadrada(num) {
	if( typeof(num) !== "number") {
		return "tem que ser numero"
	}
	if(num < 0 ) {
		throw "não existe raiz quadrada de numero negativo"
	}
	
	return Math.sqrt(num)
}



// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.
function bi(num) {
	return num.toString(2)
}
// parseInt("str", 10)  <- para transformar binário em decimal. 


// Escreva uma função em Javascript
// que recebe uma lista de números
// e retorna o maior número da lista.

function biggest(arr) {
	let big = - Infinity
	for (let item of arr) {
		if(typeof(item) !== "number") {
			throw "favor colocar apenas números"
		}
    if(item > big ){
      big = item;
    }
  }
  return big
}



// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// sao anagramas umas das outras.
 function ana (str, str1, str2) {
 	let a =  str.split("").sort().join("")
 	let b =  str1.split("").sort().join("")
 	let c = str2.split("").sort().join("").

 		 if (a === b && b === c && c === a){
 		 	return "são anagramas"
 		 }
 		 else {
 		 	return "nao é"
 		 }
 }

function ana () {
  const length = arguments.length 
  for (let i = 1; i < length;  i++){
      if(arguments[i-1].toLowerCase().split("").sort().join('') === arguments[i].toLowerCase().split("").sort().join("")) {
        return "é"
      } else {
        return"nao é"
      }
     }
}


ana("fala", "fala")

// Escreva uma função em Javascript
// que recebe o raio de um circulo
// e calcula o diametro, a circunferencia
// e a area dele.
// 
 function raioz (pikachu) {
 	 let dia = pikachu * 2
 	 let circu = dia * 3.14
 	 let area = Math.pow(pikachu, 2) * 3.14 
 	 return `Diametro é ${dia.toFixed(2)} e a circunferencia é ${circu.toFixed(2)} e a area é ${area.toFixed(2)}`
 }

