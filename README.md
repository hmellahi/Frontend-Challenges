# Frontend Challenges

This repository features frontend and JavaScript challenges, along with Data Structures and Algorithms (DSA) problems, designed to help developers enhance their problem-solving skills and build performant, accessible UIs.

You can also use [The Frontend Wizards App](https://dub.sh/frontwizards).

<img width="1000" heigh="1000" alt="Screenshot 2024-12-28 at 03 45 33" src="https://github.com/user-attachments/assets/094dec85-df71-4aae-8c33-3b11ab46e72c" style="margin-bottom:2rem"/>

Each challenge has:

- Requirements
- Solution (React with TypeScript for UI challenges)
- Live demo (for UI challenges)

## Table of Contents

- [Frontend Challenges](#frontend-challenges)
  - [Table of Contents](#table-of-contents)
  - [Problems](#problems)
    - [Data Structures and Algorithms](#data-structures-and-algorithms)
    - [User Interface](#user-interface)
    - [Utility Functions](#utility-functions)
  - [Use Cases](#use-cases)
  - [Getting Started](#getting-started)
  - [How to Review Your Solution](#how-to-review-your-solution)
  - [How to Contribute](#how-to-contribute)
    - [TODOs](#todos)
  - [How To Share Your Solution](#how-to-share-your-solution)
  - [How To Add New Problem](#how-to-add-new-problem)
  - [Coding Standards](#coding-standards)

## Problems

### Data Structures and Algorithms

<p align="center">

| Category            | Title                                                                                                                                  | Difficulty |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Array / String      | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)                                                                 | Easy       |
| Array / String      | [Remove Element](https://leetcode.com/problems/remove-element)                                                                         | Easy       |
| Array / String      | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)                               | Easy       |
| Array / String      | [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii)                         | Medium     |
| Array / String      | [Majority Element](https://leetcode.com/problems/majority-element)                                                                     | Easy       |
| Array / String      | [Roman to Integer](https://leetcode.com/problems/roman-to-integer)                                                                     | Easy       |
| Array / String      | [Length of Last Word](https://leetcode.com/problems/length-of-last-word)                                                               | Easy       |
| Array / String      | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)                                                           | Easy       |
| Array / String      | [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string) | Easy       |
| Hashmap             | [Ransom Note](https://leetcode.com/problems/ransom-note)                                                                               | Easy       |
| Hashmap             | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings)                                                                 | Easy       |
| Hashmap             | [Valid Anagram](https://leetcode.com/problems/valid-anagram)                                                                           | Easy       |
| Hashmap             | [Group Anagrams](https://leetcode.com/problems/group-anagrams)                                                                         | Medium     |
| Hashmap             | [Two Sum](https://leetcode.com/problems/two-sum)                                                                                       | Easy       |
| Hashmap             | [Happy Number](https://leetcode.com/problems/happy-number)                                                                             | Easy       |
| Hashmap             | [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii)                                                           | Easy       |
| Stack               | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses)                                                                   | Easy       |
| Stack               | [Min Stack](https://leetcode.com/problems/min-stack)                                                                                   | Medium     |
| Stack               | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation)                                     | Medium     |
| Two Pointers        | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome)                                                                     | Easy       |
| Two Pointers        | [Is Subsequence](https://leetcode.com/problems/is-subsequence)                                                                         | Easy       |
| Two Pointers        | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)                                   | Medium     |
| Linked List         | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle)                                                                   | Easy       |
| Linked List         | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers)                                                                       | Medium     |
| Linked List         | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)                                                         | Easy       |
| Linked List         | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)                                     | Medium     |
| Binary Tree General | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)                                             | Easy       |
| Binary Tree General | [Same Tree](https://leetcode.com/problems/same-tree)                                                                                   | Easy       |
| Binary Tree General | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree)                                                                 | Easy       |
| Intervals           | [Merge Intervals](https://leetcode.com/problems/merge-intervals)                                                                       | Medium     |
| Dynamic Programming | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs)                                                                       | Easy       |

</p>

### User Interface Challenges

<p align="center">

| Title                                                                                | Difficulty | Completed | Accessible | Solution                                                 |
| ------------------------------------------------------------------------------------ | ---------- | --------- | ---------- | -------------------------------------------------------- |
| [Hello World](https://frontwizards.com/challenge/user-interface/hello-world)         | Easy       | -         | -          | -                                                        |
| [Counter](https://frontwizards.com/challenge/user-interface/counter)                 | Easy       | -         | -          | -                                                        |
| [Rating Stars](https://frontwizards.com/challenge/user-interface/rating-stars)       | Easy       | -         | -          | -                                                        |
| [Simple Form I (without accessibility)](https://frontwizards.com/challenge/user-interface/build-form-1)     | Easy       | -         | -          | -                                                        |
| [Simple Form II (with accessibility)](https://frontwizards.com/challenge/user-interface/build-form-2)    | Easy       | -         | -          | -                                                        |
| [Traffic light](https://frontwizards.com/challenge/user-interface/traffic-light)     | Easy       | ✅        | ✅         | [Solution](/problems/traffic-light/solutions/react-ts)   |
| [File Tree](https://frontwizards.com/challenge/user-interface/file-tree)             | Medium     | ✅        | ✅         | [Solution](/problems/file-tree/solutions/react-ts)       |
| [Twitter like](https://frontwizards.com/challenge/user-interface/twitter-like)       | Medium     | ✅        | ✅         | [Solution](/problems/twitter-like/solutions/react-ts)    |
| [Twitter like II](https://frontwizards.com/challenge/user-interface/twitter-like-II) | Medium     | -         | -          | [Solution](/problems/twitter-like-II/solutions/react-ts) |
| [Whack a Mole](https://frontwizards.com/challenge/user-interface/whack-a-mole)       | Medium     | ✅        | ✅         | [Solution](/problems/whack-a-mole/solutions/react-ts)    |
| [Wordle Game](https://frontwizards.com/challenge/user-interface/wordle-game)         | Hard       | ✅        | ✅         | [Solution](/problems/wordle-game/solutions/react-ts)     |

</p>

### Utility Functions

<p align="center">

| Category                    | Title                                                                                                                               | Difficulty |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Basic Functions             | [Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/description/)                               | Easy       |
| Basic Functions             | [Counter](https://leetcode.com/problems/counter/description/)                                                                       | Easy       |
| Closures                    | [To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/description/)                                                 | Easy       |
| Closures                    | [Counter II](https://leetcode.com/problems/counter-ii/description/)                                                                 | Easy       |
| Basic Array Transformations | [Apply Transform Over Each Element in Array](https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/) | Easy       |
| Basic Array Transformations | [Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array/description/)                                 | Easy       |
| Basic Array Transformations | [Array Reduce Transformation](https://leetcode.com/problems/array-reduce-transformation/description/)                               | Easy       |
| Function Transformations    | [Function Composition](https://leetcode.com/problems/function-composition/description/)                                             | Easy       |
| Function Transformations    | [Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)                   | Easy       |
| Function Transformations    | [Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/description/)                                       | Easy       |
| Function Transformations    | [Memoize](https://leetcode.com/problems/memoize/description/)                                                                       | Medium     |
| Promises and Time           | [Add Two Promises](https://leetcode.com/problems/add-two-promises/description/)                                                     | Easy       |
| Promises and Time           | [Sleep](https://leetcode.com/problems/sleep/description/)                                                                           | Easy       |
| Promises and Time           | [Timeout Cancellation](https://leetcode.com/problems/timeout-cancellation/description/)                                             | Easy       |
| Promises and Time           | [Interval Cancellation](https://leetcode.com/problems/interval-cancellation/description/)                                           | Easy       |
| Promises and Time           | [Promise Time Limit](https://leetcode.com/problems/promise-time-limit/description/)                                                 | Medium     |
| Promises and Time           | [Cache With Time Limit](https://leetcode.com/problems/cache-with-time-limit/description/)                                           | Medium     |
| Promises and Time           | [Debounce](https://leetcode.com/problems/debounce/description/)                                                                     | Medium     |
| Promises and Time           | [Execute Asynchronous Functions in Parallel](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/) | Medium     |
| JSON                        | [Is Object Empty](https://leetcode.com/problems/is-object-empty/description/)                                                       | Easy       |
| JSON                        | [Chunk Array](https://leetcode.com/problems/chunk-array/description/)                                                               | Easy       |
| JSON                        | [Array Prototype Last](https://leetcode.com/problems/array-prototype-last/description/)                                             | Easy       |
| JSON                        | [Group By](https://leetcode.com/problems/group-by/description/)                                                                     | Medium     |
| JSON                        | [Sort By](https://leetcode.com/problems/sort-by/description/)                                                                       | Easy       |
| JSON                        | [Join Two Arrays by ID](https://leetcode.com/problems/join-two-arrays-by-id/description/)                                           | Medium     |
| JSON                        | [Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/description/)                               | Medium     |
| JSON                        | [Compact Object](https://leetcode.com/problems/compact-object/description/)                                                         | Medium     |
| Classes                     | [Calculator with Method Chaining](https://leetcode.com/problems/calculator-with-method-chaining/description/)                       | Easy       |

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

## How to Review Your Solution

- <a href="https://larsmagnus.co/blog/how-to-test-for-accessibility-with-axe-core-in-next-js-and-react" target="_blank">axe-core</a> is pre-integrated in the starter template. To use it:
  1. Open your browser's Developer Tools (F12)
  2. Check the Console tab while using your app
  3. Review and fix accessibility errors that appear (ignore minor errors)

- Test your app with keyboard to ensure full keyboard navigation (if applicable)  

- Add ARIA labels to make your app understandable by screen readers  

- Use <a href="https://claude.ai/new" target="_blank">Claude</a> for a final accessibility & quality check.  

  **Example Prompt for Claude:**  
  \`\`\`text
  Review my code for accessibility and best practices:

  - Point out critical issues that must be fixed (if any)
  - Rate the overall implementation (e.g., production-ready, needs work, etc.)

  Here's my code:
  \`\`\`

  Then paste your code..

## How to Contribute

Before starting work on a pull request (PR), please create an issue to discuss your proposal.

- ⭐️ Star this repository to motivate the addition of more challenges
- 🤓 Solved an interesting problem? Feel free to submit it!
- 🐞 If you find a bug, raise an issue or fix it and send a pull request
- 📚 Add tutorials to explain official problem solutions

### TODOs:

- [ ] Add more beginner-friendly UI problems (you can check the non solved UI problems in the UI table)
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
