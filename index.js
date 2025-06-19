// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

// Get DOM elements
const addItemBtn = document.getElementById("add-item");
const removeItemBtn = document.getElementById("remove-item");
const itemList = document.getElementById("item-list");
const form = document.getElementById("user-form");
const input = document.getElementById("user-input");
const errorMessage = document.getElementById("error-message");

// Add item on button click
addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    itemList.appendChild(newItem);
});

// Remove last item
removeItemBtn.addEventListener("click", () => {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    }
});

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (!value) {
        showError("Please enter a value before submitting.");
        return;
    }

    clearError();

    const newItem = document.createElement("li");
    newItem.textContent = value;
    itemList.appendChild(newItem);
    input.value = "";
});

// Utility functions
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

function clearError() {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
}

// resubmission again