//Exemplo da pergunta que fiz no comentario do video

// function getInputValue(input) {
//     const dom = document.querySelector(input)
//     return dom.value;
// }
 
// getInputValue("#inputNaoExiste"); 
 
// console.log("chegou aqui")

//---

// function getInputValue(input) {
//     const dom = document.querySelector(input)
//     return dom.value;
// }
 
// // getInputValue("#inputNaoExiste")
 
// try {
//     getInputValue("#inputNaoExiste")
// } catch (e) {
//     console.log(e.message)
// }
 
// console.log("chegou aqui")

//---

function getInputValue(input) {
    const dom = document.querySelector(input)
    if (!dom) {
        throw Error("O parâmetro de getInputValue precisa ser uma string que represente um elemento presente do DOM")
    }
    return dom.value;
}
 
// getInputValue("#inputNaoExiste")
 
try {
    getInputValue("#inputNaoExiste")
} catch (e) {
    console.log(e.message)
}
 
console.log("chegou aqui")

