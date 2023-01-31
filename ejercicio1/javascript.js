var edad =prompt("Cual es tu dad")
if (parseInt(edad) > 18) {
  document.getElementById("edad").style.display="block"
}
else{
  document.getElementById("edad1").style.display="block"
}
console.log(edad)