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

const generateSecurityBar = () => {
    const options = {
        length: Number(passwordLengthValue.textContent),
        uppercase: checkBoxUppercase.checked,
        lowercase: checkBoxLowercase.checked,
        numbers: checkBoxNumbers.checked,
        symbols: checkBoxSymbols.checked,
    };

    let totalOptions = 0;

    if (options.uppercase) {
        totalOptions++;
    }
    if (options.lowercase) {
        totalOptions++;
    }
    if (options.numbers) {
        totalOptions++;
    }
    if (options.symbols) {
        totalOptions++;
    }

    if (totalOptions === 0) {
        barValue.textContent = "NO OPTIONS SELECTED";
    }

    strengthBars.forEach((el) => {
        el.classList.remove("bg-red");
        el.classList.remove("bg-orange");
        el.classList.remove("bg-yellow");
        el.classList.remove("bg-green");
        el.classList.add("strength-bar-empty");
    });

    if (totalOptions === 1) {
        barValue.textContent = "TOO WEAK!";
        console.log(strengthBars[0]);
        strengthBars[0].classList.remove("strength-bar-empty");
        strengthBars[0].classList.add("bg-red");
    }

    if (totalOptions === 2) {
        barValue.textContent = "WEAK";
        [strengthBars[0], strengthBars[1]].forEach((el) => {
            el.classList.remove("strength-bar-empty");
            el.classList.add("bg-orange");
        });
    }

    if (totalOptions === 3) {
        barValue.textContent = "MEDIUM";
        [strengthBars[0], strengthBars[1], strengthBars[2]].forEach((el) => {
            el.classList.remove("strength-bar-empty");
            el.classList.add("bg-yellow");
        });
    }

    if (totalOptions === 4) {
        barValue.textContent = "STRONG";
        [
            strengthBars[0],
            strengthBars[1],
            strengthBars[2],
            strengthBars[3],
        ].forEach((el) => {
            el.classList.remove("strength-bar-empty");
            el.classList.add("bg-green");
        });
    }
};

const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

//  Generate a random password with the given length and options
const generatePassword = () => {
    // Get the options from the checkboxes
    const options = {
        length: Number(passwordLengthValue.textContent),
        uppercase: checkBoxUppercase.checked,
        lowercase: checkBoxLowercase.checked,
        numbers: checkBoxNumbers.checked,
        symbols: checkBoxSymbols.checked,
    };

    console.log(options);

    let pwd = "";

    for (let i = 0; i < options.length; i++) {
        console.log("loop");
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
    console.log(pwd);
};

passwordLengthSlider.addEventListener("input", (event) => {
    passwordLengthValue.textContent = event.target.value;
});

generateButton.addEventListener("click", (event) => {
    generatePassword();
    generateSecurityBar();
});
//add an event listener that check if the password length is 0 and disable the generate button if it is
passwordLengthSlider.addEventListener("input", (event) => {
    if (
        passwordLengthSlider.value === "0" &&
        !checkBoxLowercase.checked &&
        !checkBoxUppercase.checked &&
        !checkBoxNumbers.checked &&
        !checkBoxSymbols.checked
    ) {
        generateButton.disabled = true;
        generateButton.classList.add("disabled");
    } else if (
        passwordLengthSlider.value !== "0" &&
        (checkBoxLowercase.checked ||
            checkBoxUppercase.checked ||
            checkBoxNumbers.checked ||
            checkBoxSymbols.checked)
    ) {
        generateButton.disabled = false;
        generateButton.classList.remove("disabled");
    } else if (
        passwordLengthSlider.value === "0" &&
        (checkBoxLowercase.checked ||
            checkBoxUppercase.checked ||
            checkBoxNumbers.checked ||
            checkBoxSymbols.checked)
    ) {
        generateButton.disabled = true;
        generateButton.classList.add("disabled");
    }
});

//add an event listener that check if at least one checkbox is checked and disable the generate button if it is not
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
        if (
            !checkBoxLowercase.checked &&
            !checkBoxUppercase.checked &&
            !checkBoxNumbers.checked &&
            !checkBoxSymbols.checked &&
            passwordLengthSlider.value !== "0"
        ) {
            generateButton.disabled = true;
            generateButton.classList.add("disabled");
        }
    });
});

generateButton.disabled = true;
generateButton.classList.add("disabled");
passwordLengthValue.textContent = passwordLengthSlider.value;
