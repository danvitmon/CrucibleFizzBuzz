
// get the start and end numbers from the inputs
// Entry Point aka Controller function
function getValues() {
    let startValue = document.getElementById('startValue').value; // startValue = "0"
    let endValue = document.getElementById('endValue').value;

    let startNumber = parseInt(startValue); // startNumber = 0
    let endNumber = parseInt(endValue);

    let numberArray = generateNumbers(startNumber, endNumber);
    displayNumbers(numberArray);
}

// generate the range of numbers to display
// Business/logic function
function generateNumbers(start, end) {

    let basketOfNumbers= [];

    for (let number = start; number <= end; number = number + 1) {
        number;
        basketOfNumbers.push(number); 
    }

    return basketOfNumbers; // => [0, 1, 2, ..., 100]

}

// placing the generated numbers on the page AND bolding the even numbers
// View function
function displayNumbers(numbers) { // [0, 1, 2, 3, 4, 5, ..., 100] => length is 101
    // start = 10, end = 15
    // numbers =[10, 11, 12, 13, 14, 15]
    // numbers.length = 6

    let results = '';

    for (let index = 0; index < numbers.length; index = index + 1) {
        let currentNumber = numbers[index];

        results = results + "<tr><td>" + currentNumber + "</td></tr>";
        // index = 0
        // results = "" + "<tr><td>" + 10 + "</tr></td>"

        // index = 1
        // results = "<tr><td>10</td></tr><tr><td>11</td></tr><tr><td>12</td></tr>"
    }

    
    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results; // => <tr><td>10</td></tr>...
}