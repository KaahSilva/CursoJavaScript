function teste (){
    console.log(this) //o this é o propio objeto window.ele representa da onde foi chamada a função. Como a função esta no escopo global, está no objeto window , esse this foi quem chamou a função
}

teste()


const teste3 = ()=>{
    console.log("teste3")
    console.log(this)//quando foi criado a função o this era um window e dentro do onjeto ele continua sendo window
}

const obj ={
    n:0,
    teste2: teste, // teste2 é uma propiedade que armazena uma função chamada teste

    // o this dentro do teste2 é um objeto , sendo assim dinamico ele não é o mesmo this em todas as situações.

    // uma situação nova no JS , quando tenho propiedade e valor com o mesmo nome posso simlismente deixar apenas um nome Ex: em vez de teste: teste deixar apenas teste

    teste3 // o teste 3 so é o objeto window
}

//obj.teste2()
obj.teste3()


