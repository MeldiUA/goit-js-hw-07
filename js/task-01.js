
const list = document.querySelector("#categories");

const numCategories = list.children.length;
console.log(`Number of categories: ${numCategories}`);

for(let child of list.children){
   console.log(`Category: ${child.firstElementChild.textContent}\nElements: ${child.lastElementChild.children.length}`);
}

