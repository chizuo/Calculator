# Calculator
Just a simple calculator application built by using html, css, and vanilla javascript.
The calculator is great example of grammar analysis, syntax analysis, and semantic analysis.

## Description
This is currently v2 of the calculator. This version of the calculator currently evaluates a mathematical expression greater than 2 numbers and 1 operator.
The operator, equals, and parse function in orchestration acts as the syntax analyzer to make sure that the mathematical expression is valid before attempting to evaluate it. The evaluate function acts as the semantic analyzer to consider order of operations to correctly calculate the mathematical expression.

![alt text](https://github.com/chizuo/Calculator/blob/main/demo.gif)

### Code Details

`keyboard(key)` parses the keystrokes entered by the user and builds the mathematical expression if the keys are equivalent buttons shown in the GUI. If not, an alert is provided to explain the error.

`formatOutput(expression)` takes the mathematical expression and turns it to a string for the calculator display. This was my solution to address leading zeroes to a number. I'm currently working on a better method to deal with this approach since displaying the mathematical expression is at a cost of O(n) to accomplish.

`adjustScreen(length)` adjusts the text size for the calculator display based on the length of the expression on screen by changing the CSS properties tied to the screen.

`equals()` is a function that acts as part of the group evaluating the mathematical expression's syntax. If the expression isn't empty or invalid, then it will run `parse()` to run the other portion of the syntax analysis.

`evaluate(expression)` acts as a simple semantic analyzer to determine the intent of the mathematical expression. Currently, the grammar that represents the calculator is comprised of 2 levels of complexity in the order of operations. So, the current version of this function takes a binary logic approach to implementing a [left recursing](https://en.wikipedia.org/wiki/Left_recursion) descent parser. Where the funtion will recurse on all + or - sub-expressions and continuously evaluate any * or / sub-expressions.
