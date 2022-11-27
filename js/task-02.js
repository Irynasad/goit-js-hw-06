const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");
console.log(listOfIngredients);
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listOfIngredients.append(listItem);
});
