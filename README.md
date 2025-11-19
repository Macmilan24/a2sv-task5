# Simple Contact Form (Task 5)

This project is a implementation of a Contact Form using React, TypeScript, and the `react-hook-form` library. It demonstrates efficient state management, form validation, and responsive UI design.

## Features

- **State Management**: Utilizes the `useForm` hook to manage form inputs without the need for manual `useState` handlers for every field.
- **Validation**:
  - **Name**: Required, minimum length validation.
  - **Email**: Required, RegEx pattern matching for valid email formats.
  - **Message**: Required, minimum length validation.
- **User Feedback**:
  - Visual error indicators (red borders and text) for invalid inputs.
  - Loading state on the submit button during processing.
  - Success banner upon successful submission.
- **TypeScript**: Fully typed interfaces for props and form data.
- **Responsive Design**: Adapts to mobile and desktop screens.

## Tech Stack

- React (18+)
- TypeScript
- react-hook-form (v7+)
- CSS3

## Setup Instructions

1. **Clone the repository** (or copy the source files).
2. **Install Dependencies**:
   ```bash
   npm install react-hook-form
   ```
3. **Run the Application**:
   ```bash
   npm start
   ```

## Code Overview

### `ContactForm.tsx`
The core component. It defines an interface `IContactFormInputs`. It uses `register` to bind input fields to the hook, `handleSubmit` to process the form, and extracts `errors` and `isSubmitting` from `formState` to control the UI.

### `ContactForm.css`
Contains the styling for the form. It uses a centralized container approach with Flexbox for layout and specific classes for error states (`.input-error`).

## How to Test

1. Open the application in the browser.
2. Click "Send Message" without typing anything to see validation errors.
3. Enter an invalid email (e.g., "test@") to see the pattern validation.
4. Fill in valid data and submit to see the loading state and success message.