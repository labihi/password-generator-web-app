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
export const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));
