/*localStorage.setItem("nombre","michael")
localStorage.setItem("nombre","Alan")*/

/*console.log(localStorage.getItem("nombre"))
localStorage.setItem("persona",JSON.stringify({nombre:"michael",edad:32}))

console.log(JSON.parse(localStorage.getItem("persona")))


localStorage.removeItem("nombre")

sessionStorage.setItem("Nombre-secion","michael")

/*Document coockie*/

document.cookie="nombreCookie=MichaelCookie"
document.cookie="nombreCaducidad=Nombre;expires=" + new Date(2023,4,2).toUTCString()

console.log(document.cookie)
