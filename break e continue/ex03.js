//usando o continue , aqui ele interrompe a contagem do 5 e depois continua o codigo normalmente
let numero = 4
for (cont=0 ; cont<=10 ; cont++){
    if (cont===5){
        continue
    }
    console.log(`${numero} X ${cont}= ${(numero * cont)}`)
}