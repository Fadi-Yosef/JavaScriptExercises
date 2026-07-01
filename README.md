# JavaScript Exercises

This repository contains a series of JavaScript exercises designed to reinforce fundamental concepts and common programming patterns. Each exercise focuses on a specific aspect of JavaScript, ranging from basic variable manipulation to more advanced topics like array methods, object handling, and error management.

## Exercises

---

### 1. Exercise 1: User Profile

**Objective:** Create a program that defines three variables for a social media profile: a user's username (string), age (number), and isOnline (boolean). Then, output a welcome message using a template literal.

**Example Output:**
\`\`\`
Welcome, Astrid! You are 28 years old and currently online.
\`\`\`

---

### 2. Exercise 2: Shopping Receipt

**Objective:** Create two variables \`price\` and \`quantity\` with values 150 and 3. Calculate and log the subtotal. Then, calculate the tax (25% of subtotal) and the final total.

---

### 3. Exercise 3: Data Type Check

**Objective:** Predict and log the output of the following comparisons to understand how JavaScript handles types:
- \`10 == "10"\`
- \`10 === "10"\`
- \`undefined == null\`
- \`undefined === null\`

Explain in a comment why we should prefer \`===\` for checking user IDs or passwords.

---

### 4. Exercise 4: Age Verification

**Objective:** Write a script for a movie theater. Check if a variable \`visitorAge\` is between 12 and 18 (inclusive) to qualify for a "Teen Discount" using the \`&&\` operator. Log \`true\` or \`false\`.

---

### 5. Exercise 5: Smart Thermostat

**Objective:** Create a variable \`roomTemperature\`.
- If it's above 25, log "Turning on the AC... ❄️"
- If it's between 18 and 25, log "Temperature is perfect. ✅"
- If it's below 18, log "Turning on the heater... 🔥"

---

### 6. Exercise 6: Login Toggle

**Objective:** Use a single line ternary operator to set a variable \`buttonText\`. If the variable \`isLoggedIn\` is \`true\`, the button should say "Logout", otherwise it should say "Login".

---

### 7. Exercise 7: Traffic Light

**Objective:** Create a variable \`lightColor\`. Use a switch statement to log instructions:
- "red" -> "Stop!"
- "yellow" -> "Slow down!"
- "green" -> "Go!"
- Default -> "Invalid color."

---

### 8. Exercise 8: Countdown Timer

**Objective:** Write a \`for\` loop that simulates a rocket launch countdown from 10 down to 1, and then logs "Lift off! 🚀".

---

### 9. Exercise 9: Number List

**Objective:** Iterate through numbers 1 to 20. For each number, log if it is "Even" or "Odd" using the remainder operator \`%\`.

---

### 10. Exercise 10: Discount Function

**Objective:** Create a function called \`applyDiscount\` that takes \`price\` and \`percentage\`. It should return the discounted price. (e.g., \`applyDiscount(100, 20)\` should return 80).

---

### 11. Exercise 11: Greeting Arrow

**Objective:** Convert the following traditional function into a modern arrow function for a website welcome message:

\`\`\`javascript
function formatWelcome(name) {
    return "Hello, " + name + "! Welcome back.";
}
\`\`\`

---

### 12. Exercise 12: Email Default

**Objective:** Create a function \`sendEmail\` that takes a \`recipient\` and a \`subject\`. If \`subject\` is not provided, it should default to "No Subject".

---

### 13. Exercise 13: Price Increase

**Objective:** You have an array: \`const oldPrices = [50, 100, 250]\`. Use \`.map()\` to create a new array where every price is increased by 10% due to inflation.

---

### 14. Exercise 14: Inventory Check

**Objective:** You have an array of stock levels: \`const inventory = [0, 12, 5, 0, 8, 3]\`. Use \`.filter()\` to create a new array containing only the items that are in stock (greater than 0).

---

### 15. Exercise 15: Cart Total

**Objective:** You have an array of item prices in a cart: \`const cart = [19.99, 5.50, 24.00]\`. Use \`.reduce()\` to calculate the Total Amount the customer needs to pay.

---

### 16. Exercise 16: User Object

**Objective:** Create an object representing a \`userAccount\` with properties: \`username\`, \`email\`, \`followerCount\`, and \`isVerified\` (boolean). Log the username and email using dot notation.

---

### 17. Exercise 17: Profile Update

**Objective:** Take the \`userAccount\` from Exercise 16. Add a \`bio\`, update the \`followerCount\`, and delete the \`email\` property (for privacy). Log the final object.

---

### 18. Exercise 18: Local Storage Simulation

**Objective:** Convert your \`userAccount\` object into a JSON string (like you would do to save it to LocalStorage). Then, parse it back into an object.

---

### 19. Exercise 19: Safe API Parsing

**Objective:** Write a function \`fetchConfig\` that takes a JSON string. Use \`try...catch\` to parse it. If the string is broken (invalid JSON), log a friendly error message: "Configuration error: Please check your data."

---

### 20. Exercise 20: Auto-Date

**Objective:** Create a \`Date\` object. Log the current Year and Month, then format the date into a readable string like "03/03/2026" using \`.toLocaleDateString()\`.
