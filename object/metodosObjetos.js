const produto = {
    nome:"caneta",
    qtd: 10,

    comprar (n){
        console.log(this)
        if (n > this.qtd){
            return"quantidade não disponivel"
        }

        this.qtd -= n // vendo o valor em qtd e subtraindo pelo valor n 
    }

}

produto.comprar(3)
console.log(produto)