//criar um array com numeros randomicos não repetidos

function generateRandomInteger(max){
    return parseInt(Math.random() * max) // esse max refere a maximo que é o limite ate onde o numero randomico poderia ir ex: de 0 a 50
}

// supondo que o limite do meu numero randomico sera ate 20
let arr = []
let i =0
while(arr.length <= 20 ){
    i++
    // para que o numero que sair repetido não ir para o array 
    let randomNumber = generateRandomInteger(30)
    //console.log(randomNumber)

    //para verificar se um numero ja existe no array
    if (arr.indexOf(randomNumber) < 0){ //quando é menor que 0 significa que ele não encontrou
        arr.push(randomNumber)// quando dou um push estou garantindo que não caia em loop infinito garantindo q o arr.length sera maior que 20 saindo do loop
    }else{
        console.log(randomNumber, "ja existe no arr")
    }
}

console.log(arr)

console.log("o loop foi executado", i, "vezes")