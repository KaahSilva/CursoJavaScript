const output = document.getElementById("output")
let resp = document.getElementById("resp")
let limpar = document.getElementById("limpar")
let numero = document.getElementById("numero")



function mostrarTabuada(){
    //output.innerHTML=" um valor"
    if (numero.value === 0 ){
        window.alert("Digitar um numero por favor!")
    }else{
        let num = Number(numero.value)
        // let cont = 1

        // while(cont <=1000){
        //     let item = document.createElement('option')
        //     item.text=`${num} X ${cont}= ${num*cont}`

        //     resp.appendChild(item)
        //     cont++
        // }

        
        for ( let cont = 1 ; cont <=1000 ; cont ++ ){
            let item = document.createElement('option')
            item.text=`${num} X ${cont}= ${num*cont}`

            resp.appendChild(item)
        }

       

    }

    
}

function limparTabuada(){
    resp.innerHTML=""
    
}