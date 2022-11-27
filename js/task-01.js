const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);
console.log("");
itemsEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
  console.log("");
});
