// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]
let linha = []
for (let i = 0; i < 5; i++) {
    linha.push(0)
}
let matriz = []
for (let i = 0; i < 5; i++) {
    matriz.push(linha)
}


// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]
let matriz = []
for (let j = 0; j < 5; j++) { // A
    let linha = []
    for (let i = 0; i < 5; i++) { // B
        linha.push(Math.abs(i - j))
    }
    matriz.push(linha)
}


// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *

for (let j = 0; j < 7; j++) { 
    let ast = ""
    for (let i = j; i < 7; i++) { 
        ast += "*"
    }
    console.log(ast)
}
//

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
for (let i = 1; i <= 7; i++) {
    let line = ""
    for (let k = 1; k <= i; k++) {
        line += k
    }
    for (let j = i; j < 7; j++) { 
        line += "*"
    }
    console.log(linha)
}
