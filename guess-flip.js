// Importing functions
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
args["call"];
const prediction = args.call;
if (prediction != "heads" && prediction != "tails") {
    throw new Error('incorrect input');
} else {
    var result = coinFlip();
    if (prediction == result) {
        console.log({call:prediction, flip:result, result:"win"});
    } else {
        console.log({call:prediction, flip:result, result:"lose"});
    }
}
