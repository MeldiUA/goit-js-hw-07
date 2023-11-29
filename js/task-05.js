function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector("button.change-color");

const codeColor = document.querySelector("span.color");

changeColorBtn.addEventListener("click", handleClickBtn);

// changeColorBtn.addEventListener("click", ()=> {document.body.style.backgroundColor = getRandomHexColor()});

// changeColorBtn.addEventListener("click", ()=>{color.textContent = document.body.style.backgroundColor})

function handleClickBtn(){
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  codeColor.textContent = randomColor;
}




