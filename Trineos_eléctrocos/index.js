const distance = 10;
const sleighs = [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ]

function selectSleigh(distance, sleighs) {
  const Battery = 20;

  const Trineos = sleighs.filter((valorActual, indice, array) => {
    return array[indice].consumption * distance <= Battery;
  });

  if (Trineos.length == 0) return null;

  const maxSleigh = Trineos.reduce((prev, current) =>
    prev.consumption > current.consumption ? prev : current
  );
  const maxName = maxSleigh.name;
  return maxName;
}
const maxSleigh = sleighs.reduce((prev, current) =>
  prev.consumption > current.consumption ? prev : current
);
const maxName = maxSleigh.name;
console.log(maxName);
console.log(selectSleigh(distance, sleighs));
