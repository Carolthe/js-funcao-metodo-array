//Filter
const array = [2, 2, 3, 5, 6, 7, 10, 10 ]
const arrayFiltrado = array.filter( (elem, index, arr)=> arr.indexOf(elem) === index)
// console.log(arrayFiltrado)

//Filter
//Retornando somente numeros pares de um array

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const pares = array2.filter(numeros => numeros % 2 == 0)
console.log(pares)