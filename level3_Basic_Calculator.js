let num1 = 52
let num2 = 16
let operator = "+"
if (num1 != 0 && num2 != 0 ){
switch (operator) {
  case "+" :
    console.log("result is ", num1 + num2);
    ;
    break;

    case "-" :
    console.log("result is ", num1 - num2);
    ;
    break;
    case "*" :
    console.log("result is ", num1 * num2);
    ;
    break;
    case "/" :
    console.log("result is ", num1 / num2);
    ;
    break;
}
}else console.log("the result is 0")