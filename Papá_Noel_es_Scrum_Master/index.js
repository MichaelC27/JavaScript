function getCompleted(part, total) {
  const MCD = (a, b) => {
    let c;
    while (b) {
      c = b;
      b = a % b;
      a = c;
    }
    return a;
  };
  let partTime = part.split(":")
  let totalTime = total.split(":")
  let horas_t =
    partTime[0] * 3600 +
    partTime[1] * 60 +
    partTime[2];
  let horas_F =
    totalTime[0] * 3600 +
    totalTime[1] * 60 +
    totalTime[2];
  const divs = MCD(horas_t, horas_F);
   const time_trabado = horas_t / divs
   const time_falt = horas_F / divs
  return time_trabado+"/"+time_falt

}

console.log(getCompleted("02:20:20", "03:30:30"));
