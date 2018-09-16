// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon


const pokemon = {
	nome:"Charmander",
	nomeJapones: "Hitokage",
	numeroJohto: 234,
	evoluiDe: "Ovo",
	fraseFoda:  function () {
		return "chaaaaarrrrr-maaaannn-deeeeerr"
	}

}


// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."

pokemon.fraseChata = function() {
		return `Hello, my name is ${pokemon.nome}. And my name in Japanese ${pokemon.nomeJapones}.`
	}

pokemon.fraseChata()


// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

pokemon["can_fly"] = true





// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".

pokemon.fly = function() {
	if(pokemon.can_fly) {
	return `I'm flyyyyyying` 
}
 else {
 	return "I can't fly"
 }
}


// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

pokemon["do_something"] = function() {
 let frase = ["Fight", "Bag", "Run"]
 let rand = Math.floor(Math.random() * frase.length)
 return frase[rand]
}

pokemon.do_something()


// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

pokemon.ask = function () {
	 console.log(`What will ${pokemon.name} do?`)
	 return pokemon.do_something 

}

// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.

  for (const key in pokemon) {
  	console.log(key)
  }


// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>
// 
for (const key in pokemon) {
  	console.log(`Chave:${key}| valor:${pokemon[key]}`)
  }



//construtor de pokemon
 function Pokemon(nome, nomeJapa, numero, can_fly) {
  	this.nome = nome,
  	this.nomejapa = nomeJapa,
  	this.numero = numero ,
  	this.frase =  function() {
		return `Hello, my name is ${this.nome}. And my name in Japanese ${this.nomeJapa}.`
	} ,
	   this.can_fly = can_fly,
     this.fly = function() {
				if(this.can_fly) {
				return `I'm flyyyyyying` 
			}
			 else {
			 	return `Prefico ficar com os pés no chão, como um bom ${this.nome}`
			 }
			},
      this.do_something =  function() {
        let frase = ["Fight", "Bag", "Run"]
        let rand = Math.floor(Math.random() * frase.length)
        return frase[rand]
      },
      this.ask =  function () {
			 console.log(`What will ${this.nome} do?`)
			 return this.do_something() 
      }
  }

const pikachu = new Pokemon("Pikachu", "Pikachu", 022, false)

pikachu.ask()


