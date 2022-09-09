// Crea una funcion
function saludar( nombre) {
    return `Welcome, ${nombre}, a muy muy lejano`;
};
const saludo = saludar('Star Lord')
console.log(saludo)


// La mejor manera de crear una función es
const saludar2 = function(nombre2) {
    return `Welcome, ${nombre2}`;
};
console.log(saludar2)

// Tambien esta la manera de crear la funcion de flecha
const saludar3 = (name1) => {
    return `Hola, ${name1}`
}
console.log(saludar3('Juan'))

// Ejercicio 
// 1. Transdformar a una función de flecha
// 2. Tiene que retornar un objeto implecito (abreviar a función)
// 3. pruebas

// function getUsuarioActivo(nombre){
    // return{
        // uid: 'ABC',
        // username: nombre
    // }
// }

//const userActive = getUsuarioActivo('Kenny');
//console.log(userActive)

const getUserActive = (Unico) => ({
    uid: 'CC1019149978',
    username: Unico
})
const getUserA = getUserActive('Juan');
console.table(getUserA)
