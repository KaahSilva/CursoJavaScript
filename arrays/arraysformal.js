const arr = new Array()// array vazio
const arr2 = new Array(true, 'kalline', 28 , new Array( 2,4,10 ) )// neste aqui vesmo um array dentro de outro array

arr[0]="ferreira" // esse vai para o o array vazio , pois eu posso colocar os valores pelos indice de forma separada
console.log(arr2)
console.log(arr)
console.log(arr2[3][2])// este acessa o segundo array do arr2 que é o indice 3 e pega dentro dele o numero 10 que é o  indice 2

console.log(arr2.length)// o .length mostra o tamanhoo do array, ele mostra o seu comprimento ou seja NÃO é como o indice que começa com 0

console.log(arr2[3] [arr2[3].length-1])// esse ele ver o segundo array e seu tamanho , mas como é 3 o tamnho é dois daria erro. Porem adicionando o -1 que vira 2,ai ele mostra o ultimo que seria 10