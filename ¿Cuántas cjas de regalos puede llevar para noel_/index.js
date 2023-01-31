const packOfGifts = ['a', 'b', 'c'];
const reindeers = ['d', 'e'];

function distributeGifts(packOfGifts, reindeers) {
  let peso_regalos = packOfGifts.map((regalo) => {
    let p_regalo = regalo.length;
    return p_regalo;
  });
  let carga_renos = reindeers.map((renos) => {
    let p_renos = renos.length * 2;
    return p_renos;
  });

  let t_peso_regalos = peso_regalos.reduce((suma, item) => suma + item, 0);
  console.log(t_peso_regalos)
  let t_peso_renos = carga_renos.reduce((suma, item) => suma + item, 0);
  console.log(t_peso_renos)
  let tota_cajas =  Math.trunc(t_peso_renos / t_peso_regalos)
  return tota_cajas
}

console.log(distributeGifts(packOfGifts, reindeers));
