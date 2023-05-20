
//usando o break , caso o indicr for maior que 10 ele para e exibe uma mensagem
let numero = 4
let indice = 0
do {
    if (indice > 10){
        console.log('indice maior que 10')
        break
    }
    console.log(`${numero} X ${indice}= ${(indice * numero)} `)

    indice++
} while(indice <=10)

//usando o continue , aqui ele interrompe a contagem do 5 e depois continua o codigo normalmente

// for (cont=1 ; cont<=10 ; cont++){
//     if (cont===5){
//         continue
//     }
//     console.log(`${numero} X ${cont}= ${(numero * cont)}`)
// }

// continue usando o while

// indice =0

// while( indice <=9){
//     indice++
//     if(indice === 5){
//         continue
//     }
//     console.log(`${numero} X ${indice}= ${(numero * indice)}`)
// }