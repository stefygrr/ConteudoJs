const shoppingCart = []

//adiciona um item no carrinho de compra
function addItemToCart(item){
    shoppingCart.push(item)
}

//remover um item do carrinho
function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item)
    if(index !== -1){
        shoppingCart.splice(index,1)
    }
}

//ver os itens do carrinho
function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Seu carrinho está vazio")
    }else{
        console.log("Seus itens no carrinho de compras: ")
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i + 1} - ${shoppingCart[i]} `)
        }
    }
}

//Limpar o carrinho
function clearCart(){
    shoppingCart.length = 0;
    console.log("Seu carrinho foi apagado")
}

addItemToCart("Sofá")
addItemToCart("Estante")
addItemToCart("Mesa")
viewCart()

removeItemFromCart("Estante")
viewCart()

clearCart()
viewCart()