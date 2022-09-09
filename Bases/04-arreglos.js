//const arr = new Array(100);
//arr.push(1)

const arr = [1,2,3]
arr.push(4)
arr.push(5)
arr.push(6)

console.table(arr);

let arr2 = [...arr,7,8]

console.table(arr2)
arr2.pop() //Elimina el ultimo registro del array
console.table(arr2)