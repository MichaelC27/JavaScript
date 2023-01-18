const nombre = "Michael"
const apellido = "Cordones"
const obj={
    nombre:"michael",
    apellido:"cordones"
}


sessionStorage.setItem("Nombre",JSON.stringify(obj))

localStorage.setItem("Nombre",JSON.stringify(obj))


const dnow = new Date()

document.cookie = `Datos=${JSON.stringify(obj)};expires=`+ new Date(dnow.getTime() + 2 * 60000).toUTCString()