// Escreva a expressão em
// Javascript que atribui o
// valor `1` a `x` se `x`
// for maior do que `y`.
let x = 0;
let y = -1;
if ( x > y ) {
	x = 1; 
}


// Escreva a expressão em
// Javascript que aumenta o
// valor da variável `score`
// em 5 unidades caso o valor
// inicial de `score` esteja
// entre 80 e 90.

let score = 85;
if(score >= 80 && score <= 90) {
	score += 5;
}




// Reescreva a seguinte condicional
// sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )

let item = "caradesorvete"
let i = 0
let v = 9
item =   i > 10 || v >= 50



// Escreva a expressão em
// Javascript que retorna `true`
// se um número é par e `false`
// se um número é impar.

let n =  8;
if (n % 2 === 0) {
	console.log(true);
} else {
	console.log(false) 
}


// Escreva a expressão em
// Javascript que retorna `true` 
// se dois números forem positivos
// e `false` se dois números 
// forem negativos.

let number1 = 0;
let number2 = 1;

if (number1 > 0 && number2 > 0) {
	console.log(true)
} else if (number1 < 0 && number2 < 0) {
	console.log(false);
}


// Escreva a expressão em
// Javascript que retorna `true`
// dois números tiverem os mesmo
// sinal (+ / -) e `false` 
// se dois números tiverem sinais
// diferentes.
// 

if (number1 > 0  && number2 > 0 || number1 < 0  && number2 < 0) {
	console.log(true)
} else {
	false
}

if (Math.sign(number1) == Math.sign(number2)) {
	console.log(true);
} else {
	console.log(false)
}