// caso eu não queira utilizar o array utilizo  o arguments


function somar (){
    console.log(arguments)
    let total = 0;
    for (let i = 0 ; i < arguments.length; i++ ){
        total+= arguments[i]

    }
    return total
}
    
console.log(somar(6,2,3))
console.log(somar(6,24,35))


