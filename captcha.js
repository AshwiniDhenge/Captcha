const captcha = document.querySelector(".captcha"),
    reloadBtn = document.querySelector(".reload-btn"),
    inputField = document.querySelector(".input-area input"),
    checkBtn = document.querySelector(".check-btn"),
    statusTxt = document.querySelector(".status-text");

// Storing all captcha characters in array
let allCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

function getCaptcha() {
    captcha.innerText = "";
    for (let i = 0; i < 6; i++) {
        // Getting 6 random characters from the array
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += `${randomCharacter}`;      // Passing 6 random characters inside captcha innerText
    }
}

getCaptcha(); // Calling getCaptcha when the page loads

reloadBtn.addEventListener("click", () => {
    getCaptcha();             // Calling getCaptcha & removeContent on the reload button click
    statusTxt.style.display = "none";
});

checkBtn.addEventListener("click", e => {
    e.preventDefault();                      // Preventing button from submitting form
    statusTxt.style.display = "block";
    let inputVal = inputField.value.split('').join('');
    if (inputVal === captcha.innerText) {
        statusTxt.style.color = "green";
        statusTxt.innerText = "Nice! Captcha matched";
    } else {
        statusTxt.style.color = "red";
        statusTxt.innerText = "Captcha not matched. Please try again!";
    }
});
