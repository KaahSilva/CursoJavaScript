function fnExterna(){
    let n = "n local da função fnExterna"

    function fnInterna(){
        let n = "n local da função fnIntena"
        console.log(n)
    }
    fnInterna()// preciso chamar a função dentro da função externa , pois fora dela a função interna não existe 
    console.log(n)



}

fnExterna()