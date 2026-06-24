const passwordInput = document.getElementById("passwordInput");
const checkBtn = document.getElementById("checkBtn");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length >= 8) {
        strengthText.textContent = "Strength: Strong";
        checkBtn.style.backgroundColor = "green";
    } else if (password.length >= 6) {
        strengthText.textContent = "Strength: Medium";
        checkBtn.style.backgroundColor = "yellow";
    } else if (password.length >= 4) {
        strengthText.textContent = "Strength: Weak";
        checkBtn.style.backgroundColor = "red";
    } else {
        strengthText.textContent = "Strength : ";
        checkBtn.style.backgroundColor = "black";
    }
});

checkBtn.addEventListener("click", () => {
    const password = passwordInput.value;
    if (password.length >= 8) {
        strengthText.textContent = "Strength: Strong";
    } else if (password.length >= 6) {
        strengthText.textContent = "Strength: Medium";
    } else {
        strengthText.textContent = "Strength: ";
    }
});