const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {

    // Clear the existing list
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        const listItem = document.createElement("li");

        listItem.textContent = "The number is " + i;

        numberList.appendChild(listItem);
    }
}

generateBtn.addEventListener("click", generateNumbers);
