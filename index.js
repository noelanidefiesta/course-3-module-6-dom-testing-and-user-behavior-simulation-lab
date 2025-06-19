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


// DOM Elements
const simulateButton = document.getElementById('simulate-click');
const form = document.getElementById('user-form');
const userInput = document.getElementById('user-input');
const dynamicContent = document.getElementById('dynamic-content');
const errorMessage = document.getElementById('error-message');

// Utility: Create an element with attributes
function createElementWithAttributes(tag, attributes) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    });
    return element;
}

// Utility: Display error message
function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

// Utility: Clear error message
function clearError() {
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
}

// Simulate click action
simulateButton.addEventListener('click', () => {
    clearError();
    const newElement = createElementWithAttributes('p', { class: 'dynamic-paragraph' });
    newElement.textContent = 'Button clicked! This was dynamically added.';
    dynamicContent.appendChild(newElement);
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError();

    const value = userInput.value.trim();

    if (!value) {
        displayError('Please enter some text.');
        return;
    }

    const submittedItem = createElementWithAttributes('li', {});
    submittedItem.textContent = `Submitted: ${value}`;
    dynamicContent.appendChild(submittedItem);

    userInput.value = '';
});

// resubmission again