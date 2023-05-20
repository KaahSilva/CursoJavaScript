let n = "global" 
function mostrarN(){
    let n1=" n1 local"

    if (true){
        var n2 = "n2 dentro de if com var" // se eu em vez de let colocar VAR  ela passa a existir , pois ela não esta mais em um escopo de bloco , o escopo passa a ser da função , estão ela existe dentro da função inteira
    }
    console.log("Valor de n1:" + n1 )// essa mostra o local
    console.log("Valor de n1:" + n2 )//mostra dentro do if
}
mostrarN()
console.log("valor de n :" + n)//mostra o global