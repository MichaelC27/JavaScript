const lis_compra = ["pan", "jugo", "leche", "azucar", "lentejas"];
const lista_peliculas = [
  {
    titulo: "Volver al futuro",
    director: "Robert Zemeckis",
    fecha: new Date("July 3 1985"),
  },
  {
    titulo: "Una chica fuera de serie",
    director: "Yann Samuell",
    fecha: new Date("June 26 2008"),
  },
  {
    titulo: "Project Almanac",
    director: "Dean Israelite",
    fecha: new Date("January 28 2015")
  },
];

lis_compra.push("Aceite de girasol");

console.log(lis_compra);

lis_compra.pop();
console.log(lis_compra);

const pelis = lista_peliculas.filter(
  (obj) => obj.fecha < new Date("January 1  2010")
);
console.log(pelis);

const list_director = lista_peliculas.map((valor) => valor.director);
console.log(list_director);

const peiculas = lista_peliculas.map((valor) => valor.titulo);
console.log(peiculas);


nueva_lista=list_director.concat(peiculas);
console.log(nueva_lista)

nueva_lista2 = [...list_director,...peiculas]
console.log(nueva_lista2)