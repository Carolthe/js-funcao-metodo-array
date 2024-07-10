//Aula de Funções de Array do dpw

//Map em um Array

const numbers = [1, 8, 9, 20, 3, 4, 6]
const dobrarValor = numbers.map( function(elem){
    return elem * 2
})
const dobrarValor2 = numbers.map(num => num * 3)
// console.log(dobrarValor2)


//converter celsius em fahrnheit 

const fahrnheit = [0, 30, 56, 100, 24, 5]
const celsius = fahrnheit.map(function(elem){
    return Math.round((elem - 32) * 5/9)
})
const celsius2 =  fahrnheit.map(elem => Math.round( elem - 32) * 5/9)
// console.log(celsius)




