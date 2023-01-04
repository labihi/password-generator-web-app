// Allowed characters
const Allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*",
};

// Function to reset the strength bar to empty state
/*
 * @param {Array} strengthBars - Array of strength bar elements
 */
export const resetBar = (strengthBars) => {
    strengthBars.forEach((el) => {
        el.classList.remove("bg-red");
        el.classList.remove("bg-orange");
        el.classList.remove("bg-yellow");
        el.classList.remove("bg-green");
        el.classList.add("strength-bar-empty");
    });
};

// Function to generate a random character from a pool of characters
export const getRandomCharFromString = (str) => {
    if (!str) return;
    if (typeof str !== "string") return;
    return str.charAt(Math.floor(Math.random() * str.length));
};

// Function to generate a password
export const generatePassword = (
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

    return pwd;
};
