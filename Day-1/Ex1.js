/*DIA 1 - Fundamentos JS*/
/*
    Objetivo:
    -variáveis
    -tipos
    -arrays
    -objetos
    -funções
    -loop
    -condição
*/

const pedidos = [
  { cliente: "João", valor: 120 },
  { cliente: "Maria", valor: 80 },
  { cliente: "Pedro", valor: 200 },
  { cliente: "Ana", valor: 50 }
];

let total = 0;
let maiorValor = 0;
let cliente;

pedidos.forEach((pedido)=>{
    console.log(`${pedido.cliente} - R$${pedido.valor} - ${agruparPedido(pedido.valor)}`)
    total += pedido.valor

    if(pedido.valor > maiorValor){
        maiorValor = pedido.valor
        cliente = pedido.cliente
    }
})

console.log(`Maior Valor: ${cliente} - R$${maiorValor}`)
console.log(`Valor Total: R$${total}`)


let altos = []
let normais = []

function agruparPedido(valor){
    if(valor >= 100){
        return "ALTO"
    }
    else if(valor < 100){
        return "NORMAL"
    }
}