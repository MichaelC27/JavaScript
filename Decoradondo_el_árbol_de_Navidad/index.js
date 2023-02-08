function decorateTree(base) {
  let ArrayBase = base.split(" ");
  let adorno, a, b;
  let Array_Dec = [];
  let adorno_F = ArrayBase.map((currenvalue, index_M, arry_Adorno) => {
    if (index_M == 0) {
      Array_Dec = [...ArrayBase];
    }
    arry_Adorno = Array_Dec.reduce((acumu, currenvalue, index, arry) => {
      if (index < arry.length - 1) {
        a = currenvalue + arry[index + 1];
        switch (a) {
          case "PP":
            b = "P";
            break;
          case "BB":
            b = "B";
            break;
          case "RR":
            b = "R";
            break;
          case "BP":
          case "PB":
            b = "R";
            break;
          case "RP":
          case "PR":
            b = "B";
            break;
          case "BR":
          case "RB":
            b = "P";
            break;
        }
        acumu.push(b);
      }
      return acumu;
    }, []);
    //Finaliza REDUCE

    if (index_M == 0) {
      adorno = ArrayBase.join(" ");
      return adorno;
    }
    Array_Dec = [...arry_Adorno];
    adorno = Array_Dec.join(" ");
    return adorno;
  }); //FINALIZA MAP
  let FinalAdornos = adorno_F.reverse();
  return FinalAdornos;
}

console.log(decorateTree("B B"));
