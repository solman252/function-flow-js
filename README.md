# JavaScript Functions Workshop

This is a JavaScript functions workshop designed for Nayland College students and first-year NMIT Digital Technlogy students. It includes interactive coding exercises, peer programming, visualizations, and automated feedback — using only JavaScript.

## Learning Goals

By the end of this workshop, students will be able to:

- Declare and invoke functions
- Use parameters and return values
- Differentiate between global and local scope
- Work with callback functions
- Understand function hoisting
- Visualize function execution using console and canvas
- Collaborate effectively using peer coding practices

## Project Structure

```
.
├── starter/           # Hands-on files for students to implement logic from scratch
├── completed/         # Solutions used by CI (hidden from main branch)
├── tests/             # Jest tests to verify student logic
├── .github/
│   └── workflows/
│       └── test.yml   # GitHub Actions CI workflow
├── package.json       # Project setup with Jest configured
├── .gitignore         # Prevents completed/ from being committed in main
└── README.md          # Full learning guide and instructions
```


## Peer Coding Instructions

We use the Driver–Navigator model to promote active collaboration.

### Roles:
- **Driver**: Types the code, runs tests, navigates files
- **Navigator**: Guides the logic, checks the instructions, and reviews the Driver's work

Switch roles every 10 to 15 minutes.

## Activity Overview

Each `.js` file in the `starter/` folder contains a function name and comments with TODO instructions. Your job is to **write the full logic from scratch** using the function signature and provided guidance.

You will use JavaScript to complete each exercise based on real-world logic involving objects, arrays, and workflows.

| File                    | Topic                         | Key Concepts                     |
|-------------------------|-------------------------------|----------------------------------|
| 01_basics.js            | Object Properties              | Declaring and accessing objects  |
| 02_parameters.js        | Summing Values                 | Function parameters and loops    |
| 03_scope.js             | Variable Scope                 | Global vs Local variables        |
| 04_callbacks.js         | Discount Calculation           | Higher-order functions, callbacks|
| 05_animation.js         | Console Rocket                 | Loops, string manipulation       |
| 06_workflow_console.js  | Shopping Cart Steps            | setTimeout, step iteration       |
| 07_workflow_canvas.js   | Browser Visualization (Canvas) | Canvas API, animation steps      |
| 08_hoisting.js          | Hoisting Demonstration         | Execution order, var vs let      |



## Instructions for Starter Files

Each file in the `starter/` folder:

- Provides only the **function name**
- Includes **TODO comments** describing what to implement
- Requires you to **write all logic yourself**
- Uses `module.exports` so your code can be tested automatically

> Example:
> In `starter/02_parameters.js`, you must write a function that takes an array of numbers and returns their total. You are expected to create the loop, accumulate the sum, and return the result.

You can test your work anytime using:
```bash
npm test
```

## Prerequisites

Make sure you have the following installed:

- Node.js (version 18 or higher): https://nodejs.org/
- A modern code editor (such as Visual Studio Code)
- A browser (for canvas-based exercises)

## Setup Instructions

### 1. Clone this Repository
```bash
git clone https://github.com/your-username/function-flow-js.git
cd function-flow-js
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Tests
```bash
npm test
```

Tests will provide instant feedback for each activity. Only complete one activity at a time.

## How Testing Works

- You write your code in `starter/` files
- Tests in `tests/` compare your code to the correct version from `completed/`
- The `completed/` folder is not in the main branch, but is pulled by GitHub Actions from a separate branch named `solutions`

> Note: You do not need access to the `completed/` folder to complete this workshop. Simply write your code in the `starter/` files, run the tests, and improve your solution based on the feedback.


## Continuous Integration (CI)

GitHub Actions will automatically:

- Run all tests on each push or pull request
- Fetch the `completed/` folder from the `solutions` branch
- Display results in the Actions tab

This ensures consistency and fairness in assessment.


## Best Practices

- Start with `01_basics.js` and move through the activities in order.
- Use the **Driver–Navigator** pattern consistently in every session.
- After completing each activity, run `npm test` to verify your solution.
- Make at least three attempts before referring to any solution.
- Discuss your approach with peers before requesting hints or help.


## Need Help?

If you're stuck or unsure:

- Ask your coding partner first and review the instructions together.
- Double-check your function names, parameters, and return values.
- Use `console.log()` to debug your code step by step.
- Reach out to your instructor, teaching assistant, or mentor.
- Use online resources like MDN or JavaScript documentation as a last resort.

Remember: making mistakes is part of the learning process.


## Troubleshooting

### I ran `npm test` but got an error
- Make sure you're in the project directory
- Try deleting `node_modules` and reinstalling:
  ```bash
  rm -rf node_modules
  npm install
  ```

### A test failed but I think my code is correct
- Double-check that your function is exported correctly using `module.exports`
- Review the function name and parameters
- Run the file manually using `node starter/filename.js` to debug

### I can't see the `completed/` folder
- That is intentional. It's used only in the CI system and hidden from student view

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

You are free to use, modify, and distribute this material for educational and non-commercial purposes, provided proper attribution is given.

