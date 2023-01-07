const logger = require("./logger");
const Mifuion = (num) => {
  if (typeof num === "number") {
    return "El valor es un numero";
  }
  throw "El valor no es un numero";
};

let numb = "2";

try {
  const fusio = Mifuion(numb);
  console.log(fusio);
} catch (error) {
  logger.error(`${error}`);
  
}
