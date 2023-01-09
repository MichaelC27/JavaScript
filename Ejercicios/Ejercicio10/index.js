class Estudiante {
  nombre = "Michael";

  asignatura = ["Javascript", "HTML", "CSS"];

  obtenDatos() {
    return{
        nombre: this.nombre,
        asignatura:this.asignatura
    }
  }
}

const estu = new Estudiante();

console.log(estu.obtenDatos());


