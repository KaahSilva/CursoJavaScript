(function(){
    function calcularMedia(){
        let total = 0;
        let qtd = arguments.length;

        for(let i = 0; i < qtd ; i++ ){
            if( typeof arguments[i] !== "number"){
                throw Error("somente numeros")
            }

            total+= arguments[i]
        }

        return total/qtd
    }

    let media01 = calcularMedia(2, 5, 9)
    console.log(media01)
})()