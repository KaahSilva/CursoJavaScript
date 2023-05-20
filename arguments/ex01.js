// nesse exemplo passa um unico parametro , sendo ele um array

function somar (arr){
    let total = 0;
    for (let i = 0 ; i < arr.length; i++ ){
        total+= arr[i]

    }
    return total
}
    
console.log(somar([6,2,3]))

