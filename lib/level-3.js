import { drawer } from '../drawer.js'

// Level 3

/**
 * Calculates the total value of all money in the drawer
 * Give the answer as a string formatted in dollars, i.e. "$23.78" not 2378
 *
 * Consider using the .toFixed() method:
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 *
 * @param {object[]} - drawer
 * @returns {string} The amount of money in the drawer formatted in dollars
 */
export function sumDrawer(drawer) {
  // code here
 let sum = 0 

  for (let item of drawer){
    sum += item.quantity * item.value;
  }
  return `$${(sum / 100).toFixed(2)}`;
}

console.log(sumDrawer(drawer));