const pedidos = [
    {cliente: "João", valor: 120},
    {cliente: "Maria", valor: 80},
    {cliente: "Ana", valor: 200},
    {cliente: "Pedro", valor: 50}
]

const resultado = pedidos.map(n => n.cliente)

console.log(resultado)