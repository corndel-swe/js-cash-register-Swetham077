/**
 * Given a recipeBook containing recipes, returns the total number of servings in the book
 */
function countServings(recipeBook) {
  // code here
  return recipeBook.recipes.reduce((total, recipe) => total + recipe.servings, 0);
}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: [
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'beef', 'tomato sauce'],
      servings: 4,
      isVegetarian: false
    },

    {
      name: 'Vegetable Stir Fry',
      ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
      servings: 2,
      isVegetarian: true
    }
  ]
}

// don't change below
export default countServings
