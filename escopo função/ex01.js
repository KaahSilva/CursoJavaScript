let n = "global" // esta no escopo global , ou seja ela funciona tanto dentro como fora das funções

function mostrarN(){
    //Uma variavel dentro de uma função é local
    n="local"// a variavel n está atribuindo um novo valor , agora ela passa a ser chxamada de local
    console.log("Valor de n:" + n )
}
mostrarN()
console.log("valor de n :" +n)