//Spread Operetor

//Utilizado para adicionar itens em um array e também para usar os valores do array executando funções

const spread = [2, 8, 10]
function soma (a, b, c){
    return a + b + c
}
// console.log(soma(...spread))

const arr = [1, 2, 3, 4]
const newArr = [...arr, 5]
console.log(newArr)