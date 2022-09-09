// Como digitar valores por consola
// debe estra instalado readline-sync
// comando: npm i readline-sync

const readline = require('readline-sync')
const name = readline.question("Digite el nickname: ")
console.log (`Welcome ${name}`)

// Toca hacer conversión de datos para eso se utuiliza el parse
const num1 = readline.question('Digite el numero 1: ')
const num2 = readline.question('Digite el numero 2: ')

console.log(`La suma de los numeros es : ${parseInt(num1) + parseInt(num2)}`)