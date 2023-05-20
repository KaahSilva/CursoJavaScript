let n = "global" 
function mostrarN(){
    let n1=" n1 local"

    if (true){
        let n1 = "n1 dentro de if com let" // o n1 dentro do if não conflita com n1 local porque quando utilei a variavel let o escopo que utilizei foi o ESCOPO DE BLOCO , nao importa se é um loop ou um if , pois é criado apenas dentro desse bloco. Fora desse bloco essa variavel não existe 

        console.log(n1)// para chamar o n1 dentro do if com o let , tenho que colocar o console dentro do if se não ele interfete com n1 local
    }
   

    console.log("Valor de n1:" + n1 )// essa mostra o local
}
mostrarN()
console.log("valor de n :" + n)