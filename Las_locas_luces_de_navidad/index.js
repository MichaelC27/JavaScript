

function countTime(leds) {
    let lista =  leds.join("").split("1")
    console.log(lista)
    lista[0] += lista.pop()
    console.log(lista)
    console.log(...lista.map(x=> x.length))
    return Math.max(...lista.map(x=> x.length))*7
}
const leds = [0, 0, 1, 0, 0]
console.log(countTime(leds))
