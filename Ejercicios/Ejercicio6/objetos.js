const michael = [
  {
    nombre: "michael",
    apellido: "cordones",
    edad: 26,
    altura: 1.6,
    desarrollador: true,
  },
];

const lista_amigos = [
    {
        ...michael
    },
  {
    nombre: "alan",
    apellido: "recinos",
    edad: 30,
    altura: 1.8,
    desarrollador: false,
  },
  {
    nombre: "alberto",
    apellido: "samaniego",
    edad: 29,
    altura: 1.8,
    desarrollador: false,
  },
];

const edadM = "edad";
console.log(michael[edadM]);

console.log(lista_amigos)

lista_amigos.sort((a,b)=> a.edad - b.edad)
console.log(lista_amigos)