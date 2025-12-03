
function getDayMessage() {
    let input = prompt("Enter a number between 1 and 7:");
    let NumberValue = Number(input); 

   

    switch (NumberValue) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Number");
    }
}

getDayMessage();

let score = 72;     
let scoreInput = prompt("Enter your score ");
 
let result = scoreInput >= 70 ? "Pass" : "Fail";
alert(result);


