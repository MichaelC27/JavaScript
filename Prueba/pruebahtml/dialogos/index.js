const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click",() =>{
    //alert("Se ha echo un click")
    //confirm("Estas de acuerdo?") && console.log("ok")
    /*confirm("Estas de acuerdo?")
        ? console.log("ok")
        : console.log("NO!!")
*/
    const respuesta  = confirm("¿Seguro?")
    if (respuesta){
        console.log("Estás de acuerdo")
    }else{
        console.log("NO estás de acuerdo")
    }
})