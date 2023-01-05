function mifuncion(){
    return true
}

console.log(mifuncion())


const mipromesa = new Promise ((positivo,negativo) => {
    setTimeout(positivo,5000)

})

mipromesa   
    .then(() => console.log("Hola soy una promesa"))
    .catch(() =>console.log("nada"))



function* generarindice(){
    let ind = 0
    while(true){
        ind++
        if (ind ===10){
            return ind
        }
        if (ind % 2 ==0){
            yield ind
        }
    }
}
indice =  generarindice();
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
