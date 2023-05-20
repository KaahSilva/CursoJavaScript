const pessoa = new Object()
pessoa.nome = 'kah'
pessoa.idade = 21
console.log(pessoa)
let prop = "nome"
console.log(pessoa[prop])// ira chamar a variavel prop com o valor retornando kah que é o nome que utilizei
console.log(pessoa.idade) // mostra a idade
console.log(pessoa["idade"])// tambem mostra a idade porem utilizando dos colchetes e note que esta entre aspas para não confundir com uma variavel