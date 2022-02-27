// Importing functions
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
args["number"];
const num = args.number || 1;
console.log(coinFlips(num));
console.log(countFlips(coinFlips(num)));