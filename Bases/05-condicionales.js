//Condicionales

    // IF, ELSE Y ELSE IF
    const num1 = 1000;
    const num2 = 1000
    
    if (num1 == num2){
        console.log('los numeros son iguales')
    } else if (num1 > num2){
        console.log("El número 1 es mayor que el número 2")
    } else {
        console.log("El número 2 es mayor que el número 1")
    }    

    // Switch
    const fruta = "Churrasco"
    switch(fruta ){
        case 'Pera':
            console.log('La Pera cuesta 1000$')
            break;
        case 'Uva':
            console.log('Las Uvas son muy baratas (a 50$)')
            break
        case 'Manzana':
            console.log('La Manzana esta muy cara (a 400$)')
            break
        default:
            console.log('No se encontro la fruta');
    }

    // Ejercicio switch
    let Dia = 0;

switch (Dia){
    case 1:
        console.log('Hoy es Lunes')
        break;
    case 2:
        console.log('Hoy es Martes')
        break;
    case 3:
        console.log('Hoy es Miercoles')
        break;
    case 4:
        console.log('Hoy es Jueves')
        break;
    case 5:
        console.log('Hoy es Viernes')
        break;
    case 6:
        console.log('Hoy es Sabado')
        break;    
    case 7:
        console.log('Hoy es Domingo')
        break;
    default:
        console.log('EL dia no se encuentra')
        break
    }
