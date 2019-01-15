// Define variables
var memory = [[]];        //variable to store input as array so they be turned into string to be compared with expressions
    result = 0;         //variable to store result
    memoryIndex = 0;      //variable to help navigate through array
    dotCount = 0;      //variable to keep track of number of dots to avoid user using more than one dot
    operatorCount = 0;       //variable to keep track of operators to avoid user inserting two operators at once
    numCount = 1;            //variable to keep track of the numbers passed to an operator
    errorMessage = "Something went wrong.";     
    output = document.getElementById("output");                //variable to display number entered before operator
    outputOperations = document.getElementById("outputOperations");        //variable to display number entered after operator


    //Additional Feature: keyboard input
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "0":
    collectMemory(0);
    break;
    case "1":
    collectMemory(1);
    break;
    case "2":
    collectMemory(2);
    break;
    case "3":
    collectMemory(3);
    break;
    case "4":
    collectMemory(4);
    break;
    case "5":
    collectMemory(5);
    break;
    case "6":
    collectMemory(6);
    break;
    case "7":
    collectMemory(7);
    break;
    case "8":
    collectMemory(8);
    break;
    case "9":
    collectMemory(9);
    break;
    // Operator Keys
    case "+":
    operator("+");
    break;
    case "-":
    operator("-");
    break;
    case "/":
    operator("/");
    break;
    case "*":
    operator("*");
    break;
    // Dot or Comma Value
    case ".":
    collectMemoryDot(".");
    break;
    case ",":
    collectMemoryDot(".");
    break;
    // Enter or Equal
    case "Enter":
    calculate();
    break;
    case "=":
    calculate();
    break;
    // Backspace = delete last input
    case "Backspace":
    ce();
    break;
    // Escape = AC
    case "Escape":
    ac();
    break;
    default:
    return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);


// Collect value of Numbers 0-9 and push in memory array
// output.value joined, because live output
function collectMemory (value){
  if(numCount === 0) {
    memoryIndex++;
    memory[memoryIndex] = [];
  }
  memory[memoryIndex].push(value);
  if(memory[memoryIndex][0] === 0 && memory[memoryIndex].length > 1 && memory[memoryIndex][1] != "."){            //if user enters an number after zero,only that number is displayed
    console.log("01");
    output.value = memory[memoryIndex][1];
  } else {
    output.value = memory[memoryIndex].join("");                            //display all numbers
  }
  console.log("memory number", memory);
  operatorCount = 1;
  numCount = 1;
}
