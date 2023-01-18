//Documentacion data transfer
const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const borrar = document.querySelectorAll(".img-borrar");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    // console.log("inicio de arrastre");
    //console.log(parrafo.innerText);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    const img_fans = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(img_fans, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    //console.log("He terminado de arrastrar");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "link";
    //console.log("Drag Over");
  });
  seccion.addEventListener("drop", (event) => {
    //console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");

    //console.log("parrafo id es", id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo)
  });
});

borrar.forEach((borra)=>{
    borra.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "link";
        //console.log("Drag Over");
      });
    borra.addEventListener("drop", (event) => {
        //console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        document.getElementById(id_parrafo).remove()
      });
})