// 1. Exercise 1: User Profile
let username = "Astrid";
let age = 28;
let isOnline = true;
console.log(`Welcome, ${username}! You are ${age} years old and currently ${isOnline ? "online" : "offline"}.`);

// 2. Exercise 2: Shopping Receipt
let price = 150;
let quantity = 3;
let subtotal = price * quantity;
console.log("Subtotal:", subtotal);
let tax = subtotal * 0.25;
let finalTotal = subtotal + tax;
console.log("Tax:", tax);
console.log("Final Total:", finalTotal);

// 3. Exercise 3: Data Type Check
console.log('10 == "10"', 10 == "10"); // true, because of type coercion
console.log('10 === "10"', 10 === "10"); // false, because types are different
console.log('undefined == null', undefined == null); // true, because both represent absence of value
console.log('undefined === null', undefined === null); // false, because types are different

// We should prefer === for checking user IDs or passwords because it performs a strict comparison,
// meaning it checks both the value and the type. This prevents unexpected behavior due to type coercion,
// which could lead to security vulnerabilities if, for example, a string "123" was considered equal to a number 123.

// 4. Exercise 4: Age Verification
let visitorAge = 16;
let hasTeenDiscount = visitorAge >= 12 && visitorAge <= 18;
console.log("Teen Discount:", hasTeenDiscount);

// 5. Exercise 5: Smart Thermostat
let roomTemperature = 22;
if (roomTemperature > 25) {
    console.log("Turning on the AC... ❄️");
} else if (roomTemperature >= 18 && roomTemperature <= 25) {
    console.log("Temperature is perfect. ✅");
} else {
    console.log("Turning on the heater... 🔥");
}

// 6. Exercise 6: Login Toggle
let isLoggedIn = false;
let buttonText = isLoggedIn ? "Logout" : "Login";
console.log("Button Text:", buttonText);

// 7. Exercise 7: Traffic Light
let lightColor = "green";
switch (lightColor) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Slow down!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid color.");
}

// 8. Exercise 8: Countdown Timer
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lift off! 🚀");

// 9. Exercise 9: Number List
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, "Even");
    } else {
        console.log(i, "Odd");
    }
}

// 10. Exercise 10: Discount Function
function applyDiscount(price, percentage) {
    return price - (price * (percentage / 100));
}
console.log("Discounted Price:", applyDiscount(100, 20));

// 11. Exercise 11: Greeting Arrow
const formatWelcome = (name) => `Hello, ${name}! Welcome back.`;
console.log(formatWelcome("Alice"));

// 12. Exercise 12: Email Default
function sendEmail(recipient, subject = "No Subject") {
    console.log(`Sending email to ${recipient} with subject: ${subject}`);
}
sendEmail("john.doe@example.com", "Meeting Reminder");
sendEmail("jane.doe@example.com");

// 13. Exercise 13: Price Increase
const oldPrices = [50, 100, 250];
const newPrices = oldPrices.map(price => price * 1.10);
console.log("New Prices (10% increase):", newPrices);

// 14. Exercise 14: Inventory Check
const inventory = [0, 12, 5, 0, 8, 3];
const inStockItems = inventory.filter(stock => stock > 0);
console.log("In Stock Items:", inStockItems);

// 15. Exercise 15: Cart Total
const cart = [19.99, 5.50, 24.00];
const totalAmount = cart.reduce((sum, itemPrice) => sum + itemPrice, 0);
console.log("Total Amount in Cart:", totalAmount);

// 16. Exercise 16: User Object
let userAccount = {
    username: "coder_gal",
    email: "coder.gal@example.com",
    followerCount: 1500,
    isVerified: true
};
console.log("Username:", userAccount.username);
console.log("Email:", userAccount.email);

// 17. Exercise 17: Profile Update
userAccount.bio = "Passionate about coding and web development.";
userAccount.followerCount = 1600;
delete userAccount.email;
console.log("Updated User Account:", userAccount);

// 18. Exercise 18: Local Storage Simulation
const userAccountJSON = JSON.stringify(userAccount);
console.log("User Account as JSON string:", userAccountJSON);
const parsedUserAccount = JSON.parse(userAccountJSON);
console.log("Parsed User Account object:", parsedUserAccount);

// 19. Exercise 19: Safe API Parsing
function fetchConfig(jsonString) {
    try {
        const config = JSON.parse(jsonString);
        console.log("Parsed configuration:", config);
        return config;
    } catch (error) {
        console.log("Configuration error: Please check your data.");
        return null;
    }
}
fetchConfig('{"theme": "dark", "notifications": true}');
fetchConfig('{"theme": "light", "notifications": false,'); // Invalid JSON

// 20. Exercise 20: Auto-Date
const currentDate = new Date();
console.log("Current Year:", currentDate.getFullYear());
console.log("Current Month:", currentDate.getMonth() + 1); // Month is 0-indexed
const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});
console.log("Formatted Date:", formattedDate);