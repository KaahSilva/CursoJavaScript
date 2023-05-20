function sum (n1,n2){
    if (typeof n1 !== "number" || typeof n2 !== "number"){
        return alert("apenas numeros")
    }
    return n1+ n2
}

// console.log (sum(2,3))
// alert(sum(3,"a"))
document.write(sum (2,"a"))