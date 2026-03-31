const pedidos = [
  { cliente: "João", valor: 120 },
  { cliente: "Maria", valor: 80 },
  { cliente: "Pedro", valor: 200 },
  { cliente: "Ana", valor: 50 }
];

function agruparPedidos(){
    let highValues = []
    let normalValues = []

    pedidos.forEach((pedido)=>{
        if(pedido.valor >= 100)
        {
            highValues.push(pedido.cliente)
        }
        else{
            normalValues.push(pedido.cliente)
        }
    })

    return{
        altos: highValues, 
        normal: normalValues
    }
}

const resultado = agruparPedidos()

console.log(resultado.altos)
//console.log(`Clientes com Pedidos baixos: [${agruparPedidos("NORMAIS")}]`)

