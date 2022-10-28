var operator = null;
var firstNumber = null;
const maxNumbers = 18;

function clearScreen() {
    document.getElementById("content").innerHTML = "";
}

function backButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    contents = contents.slice(0, contents.length - 1);
    content.innerHTML = contents.length > 0 ? contents : "";
}

function equalsButton() {
    if(operator == null) return;
    let content = document.getElementById("content");
    let secondNumber = parseInt(content.innerHTML);

    switch(operator) {
        case "*":
            content.innerHTML = firstNumber * secondNumber;
            break;
        case "+":
            content.innerHTML = firstNumber + secondNumber;
            break;
        case "-":
            content.innerHTML = firstNumber - secondNumber;
            break;
        case "/":
            content.innerHTML = firstNumber / secondNumber;
            break;
    }
    operator = null;
}

function oneButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "1" : contents + "1";
}

function twoButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "2" : contents + "2";
}

function threeButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "3" : contents + "3";
}

function fourButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "4" : contents + "4";
}

function fiveButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "5" : contents + "5";
}

function sixButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "6" : contents + "6";
}

function sevenButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "7" : contents + "7";
}

function eightButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "8" : contents + "8";
}

function nineButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "9" : contents + "9";
}

function zeroButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === maxNumbers) return;
    content.innerHTML = numberFormatter(contents) ? "0" : contents + "0";
}

function multiplyButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    operator = "*";
    firstNumber = parseInt(content.innerHTML);
    content.innerHTML = "<p>&times;</p>";
}

function divideButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    operator = "/";
    firstNumber = parseInt(content.innerHTML);
    content.innerHTML = "<p>&divide;</p>";
}

function plusButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    operator = "+";
    firstNumber = parseInt(content.innerHTML);
    content.innerHTML = "<p>&plus;</p>";
}

function minusButton() {
    let content = document.getElementById("content");
    let contents = content.innerHTML;
    if(contents.length === 0) return;
    operator = "-";
    firstNumber = parseInt(content.innerHTML);
    content.innerHTML = "<p>&minus;</p>";
}

function numberFormatter(contents) {
    return isNaN(contents) || contents.length == 0 || contents == 0;
}

function start() {
    document.getElementById("clear").addEventListener("click", clearScreen, false);
    document.getElementById("back").addEventListener("click", backButton, false);
    document.getElementById("equals").addEventListener("click", equalsButton, false);
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
}

window.addEventListener("load", start, false);