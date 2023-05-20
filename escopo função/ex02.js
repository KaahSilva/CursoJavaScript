let n = "global" 
function mostrarN(){
    
    let n="local"// aqui ela não vai entrar em conflito com a outra variavel mesmo tento o mesmo nome ja que uma esta no escopo global e esta esta no escopo local
    console.log("Valor de n:" + n )
}
mostrarN()
console.log("valor de n :" + n)