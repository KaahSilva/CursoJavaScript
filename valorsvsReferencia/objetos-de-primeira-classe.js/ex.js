function fn (cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    cb()
}
//fn()

fn ( function (){
    console.log("função passada por paramentro")

}) 
//ou fazer da segunte forma o resultado será o mesmo

// function callback(){
//     console.log("função passada por paramentro")
// }
// fn(callback)
    


  //função retornada por parametro

  function fn3 (){
    fn3.count++//como se fosse um contador de quantas vezes eu chamo uma função
    return function _fn3(){
        console.log("função retorada por parametro")
    }
  }

  fn3.count = 0

  const função3 = fn3() // dentro de função3 esta armazenada a function_3
  const função3a= fn3()
  const função3b = fn3()
  const função3c = fn3()
  função3()//função3 é uma funçaõ pois o valor retornado dele é uma função
console.log(fn3.count)
//posso colocar minhas propias propiedades numa funçoes.Usar o fn3 como exemplo