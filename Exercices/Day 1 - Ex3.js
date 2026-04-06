const pedidos = [
  { cliente: "João", valor: 120 },
  { cliente: "Maria", valor: 80 },
  { cliente: "Pedro", valor: 200 },
  { cliente: "Ana", valor: 50 }
];

function agruparPedido(){
    let highValues = [];
    let normalValues = [];

    pedidos.forEach((pedido)=>{
        pedido.valor >= 100? highValues.push(pedido.cliente): normalValues.push(pedido.cliente) 
    })
    
    console.log(`Clientes com Pedidos altos: [${highValues.join(", ")}]`)
    console.log(`Clientes com Pedidos baixos: [${normalValues.join(", ")}]`)
}

agruparPedido()