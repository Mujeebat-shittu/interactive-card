# React Credit Card Form
A React app featuring a credit card input form with live display, basic validation, and a thank-you page after submission.

## Features
- Controlled inputs for cardholder name, card number, expiry date, and CVC.

- Real-time formatting of the card number input (e.g., adding spaces every 4 digits).

- Basic validation using HTML5 required attributes and simple JavaScript checks.

- Error messages displayed for empty required fields and basic input validation.

- Navigation to a thank-you page after successful form submission.

- Does not preserves user input state if the user navigates back to the form.

- Styling done with Tailwind and Vanilla CSS.

## Installation
1. Clone the repository:

```bash
Copy code
git clone https://github.com/yourusername/react-credit-card-form.git
cd react-credit-card-form
```

2. Install dependencies:

```bash
Copy code
npm install
# or
yarn install
```


## Usage
- Fill in the credit card details in the form.

- The card preview updates live with your input.

- If required inputs are left blank, built-in browser messages will prompt for completion.

- Additional simple validation for numeric ranges and lengths shows error messages.

- Click Confirm to submit the form.

- On success, you will be navigated to the thank-you page.

- Using the back button to return to the form won't preserve your previous input.

## Folder Structure
src/
 ├── assets/          # Images like card logo
 ├── components/
 │    ├── PageWrapper.jsx  # Main form and card preview
 │    └── ThankYou.jsx     # Thank you page component
 ├── App.jsx
 ├── index.jsx
 └── index.css


## Technologies
- React Router DOM for routing and navigation

- Tailwind and Vanilla CSS for styling

## Future Improvements
- Integrate React Hook Form for advanced validation and error handling.

- Improve validation logic for card inputs (e.g., Luhn algorithm for card number).

- Add user-friendly error messages and inline validation feedback.

- Enhance accessibility and responsiveness.

