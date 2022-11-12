const prefLength = 15;
const prefSize = "250%";
const smallerSize = "200%";
var input = "";
var prevState = "";
const operationalMapper = new Map([["-","&minus;"],["/","&divide;"],["+","&plus;"],["*","&times;"]]);
const specialChars = new Set(["*","/","-","+","=","Enter","Backspace"]);

function clearScreen() {
    document.getElementById("content").innerHTML = "";
    input = "";
    prevState = "";
}

function backButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    input = input.slice(0, input.length - 1);
    contents = contents.slice(0, contents.length - 1);
    adjustScreen(contents.length);
    content.innerHTML = contents.length > 0 ? contents : "";
}

function oneButton() {
    let content = document.getElementById("content");
    input = input + "1";
    content.innerHTML = formatOutput(parse(input));
}

function twoButton() {
    let content = document.getElementById("content");
    input = input + "2";
    content.innerHTML = formatOutput(parse(input));
}

function threeButton() {
    let content = document.getElementById("content");
    input = input + "3";
    content.innerHTML = formatOutput(parse(input));
}

function fourButton() {
    let content = document.getElementById("content");
    input = input + "4";
    content.innerHTML = formatOutput(parse(input));
}

function fiveButton() {
    let content = document.getElementById("content");
    input = input + "5";
    content.innerHTML = formatOutput(parse(input));
}

function sixButton() {
    let content = document.getElementById("content");
    input = input + "6";
    content.innerHTML = formatOutput(parse(input));
}

function sevenButton() {
    let content = document.getElementById("content");
    input = input + "7";
    content.innerHTML = formatOutput(parse(input));
}

function eightButton() {
    let content = document.getElementById("content");
    input = input + "8";
    content.innerHTML = formatOutput(parse(input));
}

function nineButton() {
    let content = document.getElementById("content");

    input = input + "9";
    content.innerHTML = formatOutput(parse(input));
}

function zeroButton() {
    let content = document.getElementById("content");
    input = input + "0";
    content.innerHTML = formatOutput(parse(input));
}

function multiplyButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    if(input.length > 0 && specialChars.has(input.charAt(input.length - 1))) {
        contents = prevState;
        input = input.substring(0, input.length-1);
    } 
    prevState = contents;
    input = input + "*";
    content.innerHTML = formatOutput(parse(input));
}

function divideButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    if(input.length > 0 && specialChars.has(input.charAt(input.length - 1))) {
        contents = prevState;
        input = input.substring(0, input.length-1);
    } 
    prevState = contents;
    input = input + "/";
    content.innerHTML = formatOutput(parse(input));
}

function plusButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    if(input.length > 0 && specialChars.has(input.charAt(input.length - 1))) {
        contents = prevState;
        input = input.substring(0, input.length-1);
    } 
    prevState = contents;
    input = input + "+";
    content.innerHTML = formatOutput(parse(input));
}

function minusButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    if(input.length > 0 && specialChars.has(input.charAt(input.length - 1))) {
        contents = prevState;
        input = input.substring(0, input.length-1);
    } 
    prevState = contents;
    input = input + "-";
    content.innerHTML = formatOutput(parse(input));
}

function equals() {
    /* Don't bother evaluating an empty input */
    if(input.length === 0) return;

    /* If the last character in the input is an operator, do not evaluate */
    if(specialChars.has(input.charAt(input.length - 1))) { alert("invalid mathematical expression"); return; }
    
    let expression = parse(input);   
    let results = evaluate(expression);
    prevState = `${results}`;
    input = `${results}`;
    adjustScreen(input.length);
    document.getElementById("content").innerHTML = `${results}`;
}

function adjustScreen(length) {
    document.getElementById("content").style.fontSize = length < prefLength ? prefSize : smallerSize;
}

function parse(statement) {
    const expression = [];
    let term = "";
    for(let i = 0; i < statement.length; i++) {
        /*  if the character isn't a number and
            not a decimal point and 
            not the first character (to include negative values)
            then build the term (which is the number) */
        if(isNaN(statement.charAt(i)) && statement.charAt(i) !== "." && i !== 0) { 
            expression.push(Number.parseFloat(term));
            expression.push(statement.charAt(i));
            term = "";
        } else { term = term + statement.charAt(i); }
    }
    if(term.length > 0) { expression.push(Number.parseFloat(term)); }
    return expression;
}

function formatOutput(expression) {
    let statement = "";
    for(let i = 0; i < expression.length; i++) {
        let term = isNaN(expression[i]) ? operationalMapper.get(expression[i]) : `${expression[i]}`;
        statement = statement + term;
    }
    adjustScreen(statement.length);
    return statement;
}

function evaluate(expression) { /* Using a binary approach to recursive descent parsing  */
    if(expression.length === 1) { return expression.shift(); }
    let number = expression.shift();
    let operator = expression.shift();
    
    /* stay in current stack level and multiply or divide */
    while(operator === "*" || operator === "/") {
        number = operator === "*" ? number * expression.shift() : number / expression.shift();
        if(expression.length === 0) { return number; }
        operator = expression.shift(); 
    } 

    /* recursively descend when add or substract then return the sum or difference */
    return operator === "+" ? number + evaluate(expression) : number - evaluate(expression);
}

function keyboard(key) {
    if(key === "Shift") return;
    
    var content = document.getElementById("content");
    var contents = content.innerHTML;

    if(isNaN(key)) { /* the key pressed must've been +,-,/,*,=, Enter, or Backspace */
        if(specialChars.has(key)) { 
            if(key === "Enter" || key === "=") { equals(); }
            else if(key === "Backspace") { backButton(); }
            else {
                /* if the input currently ends with an operator remove the operator in input & contents */
                if(input.length > 0 && specialChars.has(input.charAt(input.length - 1))) {
                    contents = prevState;
                    input = input.substring(0, input.length-1);
                } 

                /* keep state before addition of the operator in case of double operator entry */
                prevState = contents;
                
                /* add the operator to the input */
                switch(key) {
                    case ("+"):
                        input = input + "+";
                        break;
                    case ("-"):
                        input = input + "-";
                        break;
                    case ("/"):
                        input = input + "/";
                        break;
                    default:
                        input = input + "*";
                        break;
                }
                
                /* add the operator as an html code for the calculator screen */
                content.innerHTML = formatOutput(parse(input));
            }
        } else { alert(`${key} is not a valid calculator button`); }
    } else { /* the key pressed was a number */
        input = input + key;
        adjustScreen(input.length);
        content.innerHTML = formatOutput(parse(input));
    }
}

function start() {
    document.getElementById("clear").addEventListener("click", clearScreen, false);
    document.getElementById("back").addEventListener("click", backButton, false);
    document.getElementById("equals").addEventListener("click", equals, false);
    document.getElementById("one").addEventListener("click", oneButton, false);
    document.getElementById("two").addEventListener("click", twoButton, false);
    document.getElementById("three").addEventListener("click", threeButton, false);
    document.getElementById("four").addEventListener("click", fourButton, false);
    document.getElementById("five").addEventListener("click", fiveButton, false);
    document.getElementById("six").addEventListener("click", sixButton, false);
    document.getElementById("seven").addEventListener("click", sevenButton, false);
    document.getElementById("eight").addEventListener("click", eightButton, false);
    document.getElementById("nine").addEventListener("click", nineButton, false);
    document.getElementById("zero").addEventListener("click", zeroButton, false);
    document.getElementById("multiply").addEventListener("click", multiplyButton, false);
    document.getElementById("divide").addEventListener("click", divideButton, false);
    document.getElementById("plus").addEventListener("click", plusButton, false);
    document.getElementById("minus").addEventListener("click", minusButton, false);
    window.addEventListener("keydown", function (e) { keyboard(e.key); }, false);
}

window.addEventListener("load", start, false);