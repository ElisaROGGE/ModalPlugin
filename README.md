## Modal Plugin
![modal-plugin](https://github.com/user-attachments/assets/09012054-f459-477a-8fb0-56908b5a8171)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install react-datepicker --save
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Configuration

The most basic use of the ModalPlugin can be achieved with the following example:

```js
<ValidationModal 
  title="Success!" 
  children="Employee created!" 
  buttonText="Close" 
  isOpen={openModal} 
  closeModal={closeModal} 
/>

```

## Available props

# title (string):
The title of the modal. This is typically displayed prominently at the top of the modal.

# children (ReactNode):
The content to display inside the modal. This can be plain text, HTML, or even other React components. You can use this to fully customize the modal's content.
Example of customizing with components:
```js
<ValidationModal
  title="Important Information"
  buttonText="Got it!"
  isOpen={openModal}
  closeModal={closeModal}
>
  <p>Please verify your email address to continue.</p>
  <ul>
    <li>Check your inbox for a confirmation email.</li>
    <li>Click the link provided in the email.</li>
  </ul>
</ValidationModal>

```

# buttonText (string):
Text displayed on the modal's action button. This allows you to control the label for user interaction (e.g., "Close", "Confirm", "Okay").

# isOpen (boolean):
A flag indicating whether the modal is open or closed. This is typically managed through state in the parent component.
Example:
```js
const [openModal, setOpenModal] = useState(false);
```

# closeModal (function):
A callback function triggered when the modal's close button or overlay is clicked. Typically used to toggle the state of isOpen.

## Example with State Management

```js
import { useState } from "react";
import ValidationModal from "your-modal-plugin";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Show Modal</button>
      <ValidationModal 
        title="Success!" 
        children="Your data has been saved successfully." 
        buttonText="Close" 
        isOpen={openModal} 
        closeModal={handleCloseModal} 
      />
    </div>
  );
}
```

This basic example demonstrates how the modal can be integrated into your application with dynamic content and state management.

