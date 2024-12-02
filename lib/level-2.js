import { drawer } from '../drawer.js'

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  // code here

  let numofCoins = 0
  const coins = ['penny', 'nickel', 'dime', 'quarter'];

  for (let item of drawer){
    if (coins.includes(item.name)) {
      numofCoins += item.quantity;
    }
  }
return numofCoins;

}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  // code here
  let numofNotes = 0
  const Notes = ['hundred', 'twenty', 'ten', 'five', 'one'];

  for (let item of drawer){
    if (Notes.includes(item.name)) {
      numofNotes += item.quantity;
    }
  }
return numofNotes;
}
