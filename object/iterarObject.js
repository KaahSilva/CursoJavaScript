const pessoa ={
    nome : "Yoda",
    idade: 900,
    profissao: "mestre jedi"
    
}

console.log(pessoa)

for (let propiedade in pessoa){
    console.log(propiedade)
    console.log(pessoa[propiedade])
}