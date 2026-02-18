const results = [];
document.write("<h1>Simple Calculator</h1>");
document.write("<p>Calculation History:</p>");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number2</th><th>Result</th></tr>");
while (true) {
    var x = prompt("Enter first value:");
    if (x === null) { // Cancelled input
        alert("Operation cancelled. Missing input for x.");
        document.write("<tr><td>null</td><td>null</td><td>null</td><td>Operation cancelled</td></tr>");
        break;
    }
    x = x.trim();
    if (x === "") { x = null; } // Takes whitespace off input and sets empty strings to null
    var y = prompt("Enter second value:");
    if (y === null) { // Cancelled input
        alert("Operation cancelled. Missing input for y.");
        document.write("<tr><td>" + (x === null ? "null" : x) + "</td><td>" + (operator === null ? "null" : operator) + "</td><td>null</td><td>Operation cancelled</td></tr>");
        break;
    }
    y = y.trim();    
    if (y === "") { y = null; } // For this number too
    var operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) { // Cancelled input
        alert("Operation cancelled. Missing input for operator.");
        document.write("<tr><td>" + (x === null ? "null" : x) + "</td><td>null</td><td>" + (y === null ? "null" : y) + "</td><td>Operation cancelled</td></tr>");
        break;
    }
    operator = operator.trim();
    if (operator === "") { operator = null; } // And for the whitespace too you guessed it
    if (x === null || y === null) { // Cancelled numerical input
        alert("Operation cancelled. Missing input for x or y.");
        document.write("<tr><td>" + (x === null ? "null" : x) + "</td><td>" + operator + "</td><td>" + (y === null ? "null" : y) + "</td><td>Operation cancelled</td></tr>");
        break;
    }
    else if (isNaN(x) || isNaN(y)) { // If they aren't numbers you can't do math with them
        alert("Invalid input. Please enter numeric values for x and y.");
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>Invalid input</td></tr>");
        continue;
    }
    else if (operator === null) { // Cancelled operator input
        alert("Operation cancelled. Missing input for operator.");
        document.write("<tr><td>" + x + "</td><td>null</td><td>" + y + "</td><td>Operation cancelled</td></tr>");
        break;
    }
    else { // Do math
        switch (operator) { 
            case "+": // Addition
                var value = Number(x) + Number(y);
                document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                alert(`${x} + ${y} = ${value}`);
                results.push(value);
                break;
            case "-": // Subtraction
                var value = Number(x) - Number(y);
                document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                alert(`${x} - ${y} = ${value}`);
                results.push(value);
                break;
            case "*": // Multiplication
                var value = Number(x) * Number(y);
                document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                alert(`${x} * ${y} = ${value}`);
                results.push(value);
                break;
            case "/": // Division
                if (Number(y) === 0) {
                    alert("Error: Division by zero is not allowed.");
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>Error: Division by zero</td></tr>");
                } else {
                    var value = Number(x) / Number(y);
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                    alert(`${x} / ${y} = ${value}`);
                    results.push(value);
                }
                break;
            case "%": // Modulo
                if (Number(y) === 0) {
                    alert("Error: Modulo by zero is not allowed.");
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>Error: Modulo by zero</td></tr>");
                } else { 
                    var value = Number(x) % Number(y);
                    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + value + "</td></tr>");
                    alert(`${x} % ${y} = ${value}`);
                    results.push(value);
                }
                break;
            default:
                alert("Invalid operator. Please enter one of +, -, *, /, %.");
                break;
        }
    }
}
document.write("</table>");
document.write("<br>");
document.write("<p>Summary of results:</p>");
document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
let min = results.length > 0 ? Math.min(...results) : "N/A";
let max = results.length > 0 ? Math.max(...results) : "N/A";
let total = results.length > 0 ? results.reduce((a, b) => a + b, 0) : "N/A";
let avg = results.length > 0 ? (total / results.length).toFixed(2) : "N/A";
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");