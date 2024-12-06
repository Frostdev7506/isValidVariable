# isValidVariable

[![npm version](https://badge.fury.io/js/isvalidvariable.js.svg)](https://badge.fury.io/js/isvalidvariable.js)
[![Build Status](https://travis-ci.org/yourusername/isValidVariable.svg?branch=master)](https://travis-ci.org/yourusername/isValidVariable)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple utility function to check if a variable is valid based on its type and value.

## Installation

You can install `isValidVariable` using npm:

```sh
npm install isValidVariable.js
```

## Usage

To use the `isValidVariable` function in your project, you need to import it first. Here's how you can do it:

### CommonJS

```javascript
const isValidVariable = require("isvalidvariable.js");
```

### ES Modules

```javascript
import isValidVariable from 'isvalidvariable.js';
```

# Functionality

The `isValidVariable` function checks the type of the variable and applies the following rules:

- **String**: The variable is valid if it is not an empty string after trimming whitespace.
- **Number**: The variable is valid if it is a finite number and not `NaN`.
- **Object**: The variable is valid if it is not `null` and has at least one key.
- **Array**: The variable is valid if it is not empty.
- **Function**: Functions are considered valid.
- **Symbol**: Symbols are considered valid.
- **BigInt**: BigInt values are considered valid.
- **Boolean**: Booleans are considered valid.
- **Undefined**: The variable is invalid if it is `undefined`.
- **Default**: For any other types, the function defaults to a truthiness check.

## Examples

Here are some examples demonstrating how to use the `isValidVariable` function:

```javascript
console.log(isValidVariable("")); // false
console.log(isValidVariable("hello")); // true
console.log(isValidVariable(0)); // true
console.log(isValidVariable(NaN)); // false
console.log(isValidVariable({})); // false
console.log(isValidVariable({ key: "value" })); // true
console.log(isValidVariable([])); // false
```
