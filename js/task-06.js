function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("div#controls > input");

const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")

const box = document.querySelector("div#boxes");

createBtn.addEventListener("click", handleCreateBtn);
createBtn.addEventListener("click", () => inputNum.value = "");

function handleCreateBtn(){
  if(inputNum.value < 100 && inputNum.value > 1) createBoxes(inputNum.value);

}

function createBoxes(amount){
  destroyBtn.click();
  let arr = "";
  for (let i = 0; i < amount; i++) {
    arr += `<div style="background-color: ${getRandomHexColor()}; width: ${30+i*10}px; height: ${30+i*10}px;"></div>` 
  }

  box.insertAdjacentHTML("afterbegin", arr);
}

destroyBtn.addEventListener("click", () => box.innerHTML = '')
