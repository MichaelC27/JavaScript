var nota = prompt("Cuale es tu nota");
console.log(typeof nota);

if (nota < 3) {
  document.getElementById("resultado").innerHTML = "Muy deficiente";
} else if ( nota < 5) {
  document.getElementById("resultado").innerHTML = "Insuficiente";
} else if ( nota < 6) {
  document.getElementById("resultado").innerHTML = "Suficiente";
} else if (nota < 7) {
  document.getElementById("resultado").innerHTML = "Bien";
} else if (nota < 9) {
  document.getElementById("resultado").innerHTML = "Notable";
} else if (nota <= 10) {
  document.getElementById("resultado").innerHTML = "Sobresaliente";
}
else{
    document.getElementById("resultado").innerHTML = "Nota fuera de rango";
}