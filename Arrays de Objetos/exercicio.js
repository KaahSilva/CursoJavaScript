const pessoas=[{
    nome: "Anakin",
    idade: 21
},{
    nome:"Obi-Wan",
    idade:60
},{
    nome:"Grogu",
    idade:90
}]


for(let i=0; i < pessoas.length; i++ ) {
    console.log(`O nome da pessoa é ${pessoas[i].nome} e tem ${pessoas[i].idade} anos.`)
}
