function checkPart(part) {
  let diferencias = 0;
  for (let i = 0; i < pieza.length / 2; i++) {
    if (pieza[i] !== pieza[pieza.length - i - 1]) {
      diferencias++;
    }
    if (diferencias > 1) {
      return false;
    }
  }
  return true;
}
