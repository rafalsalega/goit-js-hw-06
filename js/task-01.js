const liItems = document.querySelectorAll('.item');
console.log(`Number of categories:`, liItems.length);

for (const item of liItems) {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.childElementCount);
}