const gifts = ["cat", "game", "socks"];
console.log(gifts);

function wrapping(gifts) {
    const regalosenv=gifts.map((elemento) =>{
        const cover = "*"
        let cantca = elemento.length + 2
        envoltura=cover.repeat(cantca)
        let inicio = envoltura+"\n*";
        let fianal = "*\n"+envoltura;
        elemento = inicio + elemento + fianal;
        return elemento
        
    })
    return regalosenv
}


console.log(wrapping(gifts));

console.log(wrapping(["a"]));

console.log(typeof wrapping(gifts));

