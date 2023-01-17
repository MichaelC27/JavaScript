$(() => {
  const boton = document.getElementById("btn");

  boton.addEventListener("click", () => {
    alert("Click en el botón");
  });
  $("#btn").click(() => {
    console.log("Hola, estoy utilizando jQuery");
  });
});
