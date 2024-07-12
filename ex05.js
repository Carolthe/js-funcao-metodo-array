//Every

//Serve para fazer uma verificação e retornar true or false

const every = [25, 26, 30, 35]
const verificar = every.every(numeros => numeros > 10 )
// console.log(verificar)

const idades = [{
    name: "Carol",
    age: 25
},
{
    name: "Andreia",
    age: 52,
}]
const maiorDeIdade = idades.every( teste => teste.age >= 18)
console.log(maiorDeIdade)