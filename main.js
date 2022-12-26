import { resetBar } from "./utils/utils";
import { getRandomCharFromString } from "./utils/utils";

//  Add the selectors
const copyButton = document.querySelector("#copy-button");
const passwordLengthSlider = document.querySelector("#password-length-slider");
const passwordLengthSliderTrack = document.querySelector(
    "input[type='range']::-webkit-slider-runnable-track"
);
const passwordLengthValue = document.querySelector("#password-length-value");
const checkBoxUppercase = document.querySelector("#uppercase");
const checkBoxLowercase = document.querySelector("#lowercase");
const checkBoxNumbers = document.querySelector("#numbers");
const checkBoxSymbols = document.querySelector("#symbols");
const generateButton = document.querySelector("#generate-button");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const barValue = document.querySelector("#bar-value");
const strengthBars = document.querySelectorAll(".strength-bar");

const Allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*",
};

copyButton.addEventListener("click", (event) => {
    let passwordTextEl = document.querySelector("#password-text");
    navigator.clipboard.writeText(passwordTextEl.textContent);
});

const generateSecurityBar = (
    options = {
        uppercase,
        lowercase,
        numbers,
        symbols,
    },
    length
) => {
    let totalOptions = 0;
    //  Get the total number of enabled options
    Object.keys(options).forEach((key) => {
        if (options[key]) totalOptions++;
    });

    // Reset the bar style to empty
    resetBar(strengthBars);

    //  Add the style to the bar
    for (let i = 0; i < totalOptions; i++) {
        strengthBars[i].classList.remove("strength-bar-empty");
        if (totalOptions === 1) {
            strengthBars[i].classList.add("bg-red");
            barValue.textContent = "TOO WEAK!";
        }
        if (totalOptions === 2) {
            strengthBars[i].classList.add("bg-orange");
            barValue.textContent = "WEAK";
        }
        if (totalOptions === 3) {
            strengthBars[i].classList.add("bg-yellow");
            barValue.textContent = "MEDIUM";
        }
        if (totalOptions === 4) {
            strengthBars[i].classList.add("bg-green");
            barValue.textContent = "STRONG";
        }
    }
};

//  Generate a random password with the given length and options
const generatePassword = (
    options = {
        length,
        uppercase,
        lowercase,
        numbers,
        symbols,
    }
) => {
    // Get the options from the checkboxes

    let pwd = "";

    for (let i = 0; i < options.length; i++) {
        if (
            options.lowercase &&
            options.uppercase &&
            options.numbers &&
            options.symbols
        )
            pwd += getRandomCharFromString(Object.values(Allowed).join(""));
        else {
            // Destructure the Allowed object in order to get the allowed characters
            const { Uppers, Lowers, Numbers, Symbols } = Allowed;
            let allowedChars = "";
            // Add the allowed characters to the allowedChars string
            if (options.uppercase) allowedChars += Uppers;
            if (options.lowercase) allowedChars += Lowers;
            if (options.numbers) allowedChars += Numbers;
            if (options.symbols) allowedChars += Symbols;
            // Add a random character from the allowedChars string to the password
            pwd += getRandomCharFromString(allowedChars);
        }
    }

    // Display the password
    document.querySelector("#password-text").textContent = pwd;
};

passwordLengthSlider.addEventListener("input", (event) => {
    passwordLengthValue.textContent = event.target.value;
});

generateButton.addEventListener("click", (event) => {
    const length = Number(passwordLengthValue.textContent);

    const options = {
        uppercase: checkBoxUppercase.checked,
        lowercase: checkBoxLowercase.checked,
        numbers: checkBoxNumbers.checked,
        symbols: checkBoxSymbols.checked,
    };

    generatePassword({ length, ...options });
    generateSecurityBar(options, length);
});

// Add the event listener to the body
document.body.addEventListener("change", (event) => {
    // Enable the generate button if at least one checkbox is checked
    generateButton.disabled = true;
    generateButton.classList.add("disabled");

    checkboxes.forEach((checkbox) => {
        if (
            checkbox.checked === true &&
            passwordLengthValue.textContent > "0"
        ) {
            generateButton.disabled = false;
            generateButton.classList.remove("disabled");
        }
    });
});

checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
});

window.onload = () => {
    generateButton.disabled = true;
    generateButton.classList.add("disabled");

    passwordLengthValue.textContent = passwordLengthSlider.value;
};
