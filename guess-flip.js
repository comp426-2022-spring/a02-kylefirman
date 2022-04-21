// Importing functions
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const call = args["call"];

if (call == null) {
    console.log("Error: no input" + "\n" + "Usage: node guess-flip --call=[heads|tails]");
} else if (call != "heads" && call != "tails") {
    console.log("Error: incorrect input" + "\n" + "Usage: node guess-flip --call=[heads|tails]");
} else {
    console.log(flipACoin(call));
}
