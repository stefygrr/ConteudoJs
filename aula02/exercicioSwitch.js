var cliente = "Café"; 
switch (cliente) {
    case "Café":
        console.log("O café custa R$ 3.50");
        break;
    case "Chá":
        console.log("O chá custa R$ 2.00");
        break;
    case "Leite":
        console.log("O leite custa R$ 2.80");
        break;
    default:
        console.log("Desculpe, estamos sem " + cliente + " no momento.");
        console.log("Por favor, escolha entre Café, Chá ou Leite.");
}

