import chalk from 'chalk';
import { suma,multiplica } from "./modulo/controller.js";



const  result =  suma(1,2)
const result2 =  multiplica(4,5)

console.log (chalk.green(result))
console.log (chalk.green(result2))