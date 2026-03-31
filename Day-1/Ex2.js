const pedidos = [
  { cliente: "João", valor: 120 },
  { cliente: "Maria", valor: 80 },
  { cliente: "Pedro", valor: 200 },
  { cliente: "Ana", valor: 50 }
];

function filtrarPedido(valor){
    if(valor >= 100){   
        return "ALTO"
    }
    else if(valor < 100){
        return "NORMAL"
    }
}

function agruparPedido(){
    let list_altos = []
    let list_normais = []

    pedidos.forEach((pedido)=>{
        if(filtrarPedido(pedido.valor) == "ALTO"){
            list_altos.push(pedido.cliente)
        }
        else{
            list_normais.push(pedido.cliente)
        }
    })

    console.log(`Clientes com Pedidos altos: [${list_altos}]`)
    console.log(`Clientes com Pedidos normais: [${list_normais}]`)
}

agruparPedido()
