// === FUNCTIONS === // 
function addThisToThis(firstNumber, secondNumber) {
    return firstNumber + secondNumber
};
console.log("addThisTOThis()");
console.log(addThisToThis(12, 7));

const logThis = (strOrNumber) => {
    console.log(`%c${strOrNumber}`, "color: #3498db;");
};
console.log("logThis");
logThis("It this blue?")

const obj = {
    method: () => {
        console.log('This was inside an object.');
    },
};
console.log("obj.method()")
obj.method();

const anotherTypeOfFunction = function(...arg) {
    console.log(arguments);
};
console.log('anotherTypeOfFunction()');
anotherTypeOfFunction('first', 'second', [5, 6, 7], {key: "value",})

const myArrowFunction = num => num * 2;
console.log(myArrowFunction(21));

const crazyFunction = () => `

    ${console.log('This is a crazy function')}

`;
console.log("crazyFunction()");
crazyFunction();

const evenMoreCrazyArrowFunction = (num, num2) => { return num > num2 ? num - num2 : "That\s not right."; };
console.log("evenMoreCrazyArrowFunction()");
evenMoreCrazyArrowFunction(12, 6);