const textInput = document.querySelector("#name-input");

const outputText = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => outputText.textContent = event.currentTarget.value.trim() ? event.currentTarget.value  : "Anonymus");