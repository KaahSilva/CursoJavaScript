function alterarArray(a){
    a.push("adicionando")

}

let arr = ["a"]
console.log(arr)
alterarArray(arr)// passa o array arr para a função acima. Ou seja está passando uma referencia onde o array 'a' está armazenado
console.log(arr)// vai mostrar  o 'a'do array e o 'adicionado' da função

//Isso não aconteceria caso eu passasse um paramtro de um tipo de dado primitivo, pois quando passo dados primitivos para a função , o primitivo é passado por valor e não na refeencia da memoria. Entao tudo que fizesse dentro da função ele seria apenas do parametro não vazaria para fora

function alteraPrimitivo(p){ // o "p" armazena o valor mensagem
    p+=" adicionado "
    console.log("dentro da função: " ,  p )
}

let msg = "mensagem"
console.log(msg)
alteraPrimitivo(msg) // quando passei msg não foi uma referencia para minha variavel , oque foi passado foi o valor da minha variavel. Então foi passado uma string direto
console.log(msg)