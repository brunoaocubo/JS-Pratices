//REDUCE SOMA SIMPLES
const numbers = [10, 30, 40]

const sum = numbers.reduce((count, index)=>{
    return count + index
}, 0)
console.log(sum)
//


//REDUCE - SUBTRAÇÃO
const numbers2 = [30, 20 ,10]
const resultSub = numbers2.reduce(getSub)

function getSub(total, num){
    return total - num;
}
console.log(resultSub)
//


//REDUCE - ARREDONDA OS VALORES ANTES DE SOMAR
const numbers3 = [5.5, 8.5, 8.9, 10.1]

function getSum(total, num){
    return total + Math.round(num)
}

const sum3 = numbers3.reduce(getSum,0)
console.log(sum3)
//


//REDUCE - SOMA DOS VALORES DE OBJETO{PEDIDOS}

const orders = [
  { cliente: "João", valor: 120 },
  { cliente: "Maria", valor: 80 },
  { cliente: "Pedro", valor: 200 },
  { cliente: "Ana", valor: 50 }
];

const totalOrders = orders.reduce((total, pedido)=>{
    return total + pedido.valor
}, 0) 

console.log(totalOrders)