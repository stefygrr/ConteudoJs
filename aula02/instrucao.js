var país = "Brasil";
if(país != "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é Brasileiro");
}

var idade = 22;
if(idade < 16){
    console.log("Pessoas menores de idade não têm direito ao voto.");
}else if (idade < 18 || idade > 65 ){
    console.log("O voto é opcional e não é obrigatório.")
}else {
    console.log("Como é maior de idade, você está apta a exercer o direito de voto.")
}

var diaSem = 10;
switch(diaSem){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-feira")
        break;
    case 3:
        console.log("Terça-feira")
        break;
    case 4:
        console.log("Quarta-feira")
        break;
    case 5:
        console.log("Quinta-feira")
        break;
    case 6:
        console.log("Sexta-feira")
        break;
    case 7:
        console.log("Sábado")
    default:
        console.log("Esse dia da semana não existe!")
}