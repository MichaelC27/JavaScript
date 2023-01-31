const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {
  const regalos = [...a1, ...a2, ...a3];
  //Inventario todos los regalos no repetidos
  let inventario = regalos.filter(
    (gifts, index) => regalos.indexOf(gifts) == index
  );
  //Inventario regalos no repetidos
  let a1_A = a1.filter((gifts, index) => a1.indexOf(gifts) == index);
  let a2_A = a2.filter((gifts, index) => a2.indexOf(gifts) == index);
  let a3_A = a3.filter((gifts, index) => a3.indexOf(gifts) == index);

  //Concatenando iventario general con el de por alamcen
  let gifts_Alm = [...a1_A,...inventario];
  let gifts_Alm2 = [...a2_A,...inventario];
  let gifts_Alm3 = [...a3_A,...inventario];
  //Filtrando regalos los regalos que faltan por alacen
  let inve_Alm1 = gifts_Alm.filter(
    (gifts, index) => gifts_Alm.indexOf(gifts) === gifts_Alm.lastIndexOf(gifts)
  );
  let inve_Alm2 = gifts_Alm2.filter(
    (gifts, index) =>
      gifts_Alm2.indexOf(gifts) === gifts_Alm2.lastIndexOf(gifts)
  );
  let inve_Alm3 = gifts_Alm3.filter(
    (gifts, index) =>
      gifts_Alm3.indexOf(gifts) === gifts_Alm3.lastIndexOf(gifts)
  );

 let  inventario_F = [...inve_Alm3, ...inve_Alm2, ...inve_Alm1];

  let gifts_Fal = inventario_F.filter(
    (gifts, index) => inventario_F.indexOf(gifts) !== index
  );
  return gifts_Fal;
}

console.log( getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']))