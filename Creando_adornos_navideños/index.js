function createCube(size) {
  let frente_S = "_\\";
  let frente_I = "_/";
  let cuber = ``;
  let adorno
  for (let i = 1; i <= size; i++) {
    //Parte superior
    adorno = "";
    adorno += " ".repeat(size - i);
    adorno += "/\\".repeat(i);
    cuber += adorno + frente_S.repeat(size) + "\n";
  }
  for (let i = size; i > 0; i--) {
     adorno = "";
    adorno += " ".repeat(size - i);
    adorno += "\\/".repeat(i);
    i > 1
      ? (cuber += adorno + frente_I.repeat(size) + "\n")
      : (cuber += adorno + frente_I.repeat(size));
  }
  return cuber;
}

const cubeOfOne = createCube(6);
console.log(cubeOfOne);
