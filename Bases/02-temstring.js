const texto1 = "Hola mundo. ";
const texto2 = "Yo soy el admin del sitio"
let name
//console.log(texto1+ " "+texto2)
console.log(`HEY. 
${texto1} 
${texto2}`)

function getSaludo (name){
    name = "Juan"
    return name
}

console.log(`Solo hay un ${getSaludo()}`)