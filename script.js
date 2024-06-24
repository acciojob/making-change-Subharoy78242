const makeChange = (c) => {
    // Initialize variables for quarters, dimes, nickels, and pennies
    let q = 0, d = 0, n = 0, p = 0;

    // Calculate number of quarters
    q = Math.floor(c / 25);
    c = c % 25;

    // Calculate number of dimes
    d = Math.floor(c / 10);
    c = c % 10;

    // Calculate number of nickels
    n = Math.floor(c / 5);
    c = c % 5;

    // The remaining cents are pennies
    p = c;

    // Return the object with quarters, dimes, nickels, and pennies
    return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
