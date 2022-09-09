// objetos en js
const pers = {
    name: "Tony",
    lastname: "Stark",
    direccion: {
        ciudad: "Bogota",
        lat: 45.3362,
        log: 47.2222
    }
}

// console.log(pers.direccion.log)
// console.table(pers)

const perso = {...pers}

console.table(pers);
console.table(perso);