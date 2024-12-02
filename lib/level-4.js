import { drawer } from '../drawer.js'

// Level 4

/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */
export function canMakeAmount(target, drawer) {

  let remainingAmount = target;

  for (let i = 0; i < drawer.length; i++) {
      const { value, quantity } = drawer[i];
      const maxFromThisDenomination = Math.min(Math.floor(remainingAmount / value), quantity);
      remainingAmount -= maxFromThisDenomination * value;
  }

  return remainingAmount === 0;
}