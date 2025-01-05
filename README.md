# Frontend Challenges

This repository features frontend and JavaScript challenges designed to help developers enhance their problem-solving skills and build performant, accessible UIs.

You can also use [The Frontend Wizards App](https://dub.sh/frontwizards).

<img width="1000" heigh="1000" alt="Screenshot 2024-12-28 at 03 45 33" src="https://github.com/user-attachments/assets/094dec85-df71-4aae-8c33-3b11ab46e72c" style="margin-bottom:2rem"/>

Each UI challenge has:

- Requirements
- Solution in React with TypeScript.
- Live demo

## Table of Contents

- [Frontend Challenges](#frontend-challenges-work-in-progress)
  - [Table of Contents](#table-of-contents)
  - [Problems](#problems)
    - [User Interface problems](#user-interface-problems)
    - [Utility functions problems](#utility-functions-problems)
  - [Use Cases](#use-cases)
  - [Getting Started](#getting-started)
  - [How to Review Your Solution](#how-to-review-your-solution)
  - [How to Contribute](#how-to-contribute)
    - [TODOs](#todos)
  - [How To Share Your Solution](#how-to-share-your-solution)
  - [How To Add New Problem](#how-to-add-new-problem)
  - [Coding Standards](#coding-standards)

## Problems

### User Interface problems

<p align="center">

| Title                                                                                | Difficulty | Completed | Accessible | Reviewed | Solution                                                 |
| ------------------------------------------------------------------------------------ | ---------- | --------- | ---------- | -------- | -------------------------------------------------------- |
| [Traffic light](https://frontwizards.com/challenge/user-interface/traffic-light)     | Easy       | ✅        | ✅         | ✅       | [Solution](/problems/traffic-light/solutions/react-ts)   |
| [File Tree](https://frontwizards.com/challenge/user-interface/file-tree)             | Medium     | ✅        | ✅         | ✅       | [Solution](/problems/file-tree/solutions/react-ts)       |
| [Twitter like](https://frontwizards.com/challenge/user-interface/twitter-like)       | Medium     | ✅        | ✅         | ✅       | [Solution](/problems/twitter-like/solutions/react-ts)    |
| [Twitter like II](https://frontwizards.com/challenge/user-interface/twitter-like-II) | Medium     | -         | -          | -        | [Solution](/problems/twitter-like-II/solutions/react-ts) |
| [Whack a Mole](https://frontwizards.com/challenge/user-interface/whack-a-mole)       | Medium     | ✅        | ✅         | ✅       | [Solution](/problems/whack-a-mole/solutions/react-ts)    |
| [Wordle Game](https://frontwizards.com/challenge/user-interface/wordle-game)         | Hard       | ✅        | ✅         | ✅       | [Solution](/problems/wordle-game/solutions/react-ts)     |

</p>

### Utility functions problems

  <p align="center">

| Title                                                                                                                               | Difficulty | Topic                       |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------- |
| [Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/description/)                               | Easy       | Basic Functions             |
| [Counter](https://leetcode.com/problems/counter/description/)                                                                       | Easy       | Basic Functions             |
| [To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/description/)                                                 | Easy       | Closures                    |
| [Counter II](https://leetcode.com/problems/counter-ii/description/)                                                                 | Easy       | Closures                    |
| [Apply Transform Over Each Element in Array](https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/) | Easy       | Basic Array Transformations |
| [Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array/description/)                                 | Easy       | Basic Array Transformations |
| [Array Reduce Transformation](https://leetcode.com/problems/array-reduce-transformation/description/)                               | Easy       | Basic Array Transformations |
| [Function Composition](https://leetcode.com/problems/function-composition/description/)                                             | Easy       | Function Transformations    |
| [Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)                   | Easy       | Function Transformations    |
| [Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/description/)                                       | Easy       | Function Transformations    |
| [Memoize](https://leetcode.com/problems/memoize/description/)                                                                       | Medium     | Function Transformations    |
| [Add Two Promises](https://leetcode.com/problems/add-two-promises/description/)                                                     | Easy       | Promises and Time           |
| [Sleep](https://leetcode.com/problems/sleep/description/)                                                                           | Easy       | Promises and Time           |
| [Timeout Cancellation](https://leetcode.com/problems/timeout-cancellation/description/)                                             | Easy       | Promises and Time           |
| [Interval Cancellation](https://leetcode.com/problems/interval-cancellation/description/)                                           | Easy       | Promises and Time           |
| [Promise Time Limit](https://leetcode.com/problems/promise-time-limit/description/)                                                 | Medium     | Promises and Time           |
| [Cache With Time Limit](https://leetcode.com/problems/cache-with-time-limit/description/)                                           | Medium     | Promises and Time           |
| [Debounce](https://leetcode.com/problems/debounce/description/)                                                                     | Medium     | Promises and Time           |
| [Execute Asynchronous Functions in Parallel](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/) | Medium     | Promises and Time           |
| [Is Object Empty](https://leetcode.com/problems/is-object-empty/description/)                                                       | Easy       | JSON                        |
| [Chunk Array](https://leetcode.com/problems/chunk-array/description/)                                                               | Easy       | JSON                        |
| [Array Prototype Last](https://leetcode.com/problems/array-prototype-last/description/)                                             | Easy       | JSON                        |
| [Group By](https://leetcode.com/problems/group-by/description/)                                                                     | Medium     | JSON                        |
| [Sort By](https://leetcode.com/problems/sort-by/description/)                                                                       | Easy       | JSON                        |
| [Join Two Arrays by ID](https://leetcode.com/problems/join-two-arrays-by-id/description/)                                           | Medium     | JSON                        |
| [Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/description/)                               | Medium     | JSON                        |
| [Compact Object](https://leetcode.com/problems/compact-object/description/)                                                         | Medium     | JSON                        |
| [Calculator with Method Chaining](https://leetcode.com/problems/calculator-with-method-chaining/description/)                       | Easy       | Classes                     |

</p>

## Use Cases

- Employers evaluating frontend developer skills
- Frontend developers seeking practice with coding challenges.

## Getting Started

Let's say you want to work on the traffic light challenge.

You can create a new project or use our CLI tool to use the starter template.

### First Time Setup

```bash
# Clone repository and setup CLI tool (only needed once)
git clone https://github.com/frontendwizards/frontend-challenges.git

cd frontend-challenges/challenge-cli

npm install

npm link
```

### Start Working

```bash
# Navigate to the root of the repository
cd ..

# Create new project from template (run it at the root of the repository)
challenge-cli start "traffic-light"

# Navigate to project and start development
cd problems/traffic-light/solutions/my-solution

npm run dev
```

> [!NOTE]
> The starter template includes React and necessary tooling to get you started quickly.

## How to Review Your Solution

- Use automated accessibility checkers like [axe-core](https://larsmagnus.co/blog/how-to-test-for-accessibility-with-axe-core-in-next-js-and-react) to detect most accessibility issues.

> [!NOTE]
> axe-core is already included in the starter template.

- Test your app with keyboard to ensure full keyboard navigation (if applicable).
- Add ARIA labels to make your app understandable by screen readers.
- Use [Claude](https://claude.ai/new) for a final accessibility & quality check.

  **Example Prompt for Claude:**

  ```text
  Can you review my code for accessibility and best practices? Please:

  - Point out critical issues that must be fixed (if any)
  - Rate the overall implementation (e.g., production-ready, needs work, etc.)

  Here's my code:
  [your code]
  ```

## How to Contribute

- ⭐️ Star this repository to motivate the addition of more challenges
- 🤓 Solved an interesting problem? Feel free to submit it!
- 🐞 If you find a bug, raise an issue or fix it and send a pull request
- 📚 Add tutorials to explain official problem solutions

### TODOs:

- [ ] Configure axe-core to ignore minor accessibility warnings (e.g., missing a level-one heading) in the reportAccessibility function.
- [ ] Add a screenshot img of each problem in the README, could be automated?
- [ ] Set up GitHub Actions for pull requests to:
  - Validate solutions can be built successfully
  - Accessibility check
- [ ] Extend the CI pipeline for the main branch too
- [ ] Add resources for learning key concepts related to the problem

## How To Share Your Solution

> [!NOTE]
> Share your solution only if you believe it's good and others can learn from it.

To share your solution follow the process for [making a pull request to an open-source project](https://github.com/gabrieldemarmiesse/getting_started_open_source).

In short:

- Fork this repo and clone it.
- Create a branch and make your change.
- Push your branch to your fork.
- Open a PR against this repo.

## How To Add New Problem

If you wanna work with React, you can use the starter template.

if you can create a new problem called 'example-problem', use the create command:

```bash
challenge-cli create "example-problem"

cd problems/example-problem/solutions/react-ts

npm install

npm run dev
```

## Coding Standards

Please adhere to the following coding standards when submitting solutions:

- Ensure your app is accessible and follows best practices. Refer to the [How to Review Your Solution](#how-to-review-your-solution) for more details.
- Format your code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. This license grants permission to individuals to use this software for both personal and commercial purposes, while providing liability protection for the authors.
