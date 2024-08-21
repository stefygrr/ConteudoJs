//Categoria só de Eletrodomésticos
var loja = [
    {id: 1, descricao: "Cafeteira", categoria: "Eletrodoméstico"},
    {id: 2, descricao: "Tapete", categoria: "Decoração"},
    {id: 3, descricao: "Tênis", categoria: "Acessório"},
    {id: 4, descricao: "smartwatch", categoria: "Eletrônico"},
    {id: 5, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 6, descricao: "Caneta", categoria: "Papelaria"},
    {id: 7, descricao: "Mesa", categoria: "Móvel"},
    {id: 8, descricao: "Smartfone", categoria: "Eletrônico"},
    {id: 9, descricao: "Cadeira", categoria: "Móvel"},
    {id: 10, descricao: "Micro-ondas", categoria: "Eletrodoméstico"},
]
var produtos = loja.filter(function(procurar){
    return procurar.categoria === "Eletrodoméstico"
})
console.log(produtos)