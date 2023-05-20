function mutiplicar (n1,n2){
    if (typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error("sum aceita apenas numeros")
    }
    return n1 * n2
}

// utilizar o bloco try catch pois muitas vezes não tem controle do valor que vai colocado
let m =""
try{
    m = mutiplicar ( 3 ,"a")
}catch(error){
    console.log("erro na hora da mutiplicação")// ou usar o alert

    console.log(error.message)
} finally{
    console.log("bloco finally")
}
console.log(mutiplicar)




// let m = mutiplicar ( 3 ,"a")
