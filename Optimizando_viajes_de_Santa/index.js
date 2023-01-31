const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  giftsCities.sort((a, b) => b - a);
  let a,suma,total
  let can_Gifts = giftsCities.length - 1;
  const gift_Min = giftsCities.reduce(
    //Función regalos minimos
    function (valorAnterior, valorActual, i, vector) {
      if (suma <= maxGifts && a <= maxCities) {
        total = suma;
        a++;
      } else {
        suma = suma - giftsCities[i - 1];
      }

      suma = suma + giftsCities[i];
      return total;
    },
    0,
    (a = 0),
    (suma = giftsCities[can_Gifts]),
    (total = 0)
  );
  const gift_Max = giftsCities.reduce(
    //Funcion Regalos Maximos
    function (valorAnterior, valorActual, i, vector) {
      if (i < maxCities) {
        suma = suma + valorActual;
      }
      return suma;
    },
    0,
    (suma = 0)
  );
  if (gift_Max <= maxGifts) {
    return gift_Max;
  } else {
    return gift_Min;
  }
}

prueba = getMaxGifts([50], 15, 1);
console.log(prueba);
