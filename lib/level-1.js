import { drawer } from '../drawer.js'

// Level 1

/**
 * Goes into the given drawer and removes 1 item with the given name.
 * E.g. ('penny', drawer) removes 1 penny from the given drawer.
 * @param {string} name - the name of the currency to remove
 * @param {object[]} drawer - the drawer of currency
 * @returns {object[]} - the drawer, after removing the item
 */
export function removeItem(name, drawer) {
  // code here
  for (let item of drawer) {
    if (item.name === name) {
      if (item.quantity > 0) {
        item.quantity -= 1;
      }
      break;
    }
  }
  return drawer;
}

 removeItem('penny', drawer)
 console.log(drawer)


/**
 * The same as removeItem but adds an item of currency instead
 * @param {string} name
 * @param {object[]} drawer
 * @returns {object[]}
 */
export function addItem(name, drawer) {
  // code here
  for (let item of drawer) {
    if (item.name === name) {
      if (item.quantity >0) {
        item.quantity += 1;
      }
      break;
    }
  }
  return drawer;
}

addItem('hundred', drawer)
console.log(drawer)