# React Background Color Changer

This is a simple React project that allows you to change the background color of buttons by clicking on them. The project is built using ReactJS, Vite, and Tailwind CSS.

## Project Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/tekrajbhatta/react-bg-changer-app.git
  ```

2. Navigate to the project directory:

  ```bash
  cd react-bg-changer-app
  ```

3. Install the dependencies:
   
  ```bash
  npm install
  ```

### Running the Project

To run the project locally, use the following command:
   
  ```bash
  npm run dev
  ```
This will start the development server, and you can view the app by navigating to http://localhost:3000 in your web browser.

### Project Structure

Here's an overview of the project's structure:

```bash
 react-bg-changer-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       └── ColorButton.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

### Components

App.jsx: The main component that renders all the color buttons.

ColorButton.jsx: A component representing each color button that changes its background color when clicked.
Tailwind CSS Setup

Tailwind CSS is used for styling the buttons and layout. If you want to modify the styles, you can do so in index.css and tailwind.config.js.

### Available Scripts

npm run dev: Runs the app in the development mode.

npm run build: Builds the app for production.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
