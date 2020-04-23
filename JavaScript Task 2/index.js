//Create data array within the given values

let data = [
    {principal: 2500, time: 1.8 },
    {principal: 1000, time: 5 },
    {principal: 3000, time: 1 },
    {principal: 2000, time: 3 },
];

// Declare interestCalculator function accepting an array argument

function interestCalculator (arr) {
    let interestData = arr;
    for (let objects of interestData) {
        // Determine the applicable rate within the function
        if (objects.principal >= 2500 && (objects.time >1 && objects.time <3)) {
            objects.rate = 3
        }
        else if (objects.principal >=2500 && objects.time >=3) {
            objects.rate = 4
        }
        else if (objects.principal <2500 / objects.time <=1) {
            objects.rate = 2
        }
        else {
            objects.rate = 1
        }

        // Calculate simple interest with given formula
        objects.interest = (objects.principal * objects.rate * objects.time) / 100;
    }
        // Log interestData to console
    console.log (interestData);

        // function returns array of objects 'interestData' with corresponding key
    return interestData;   
}
// Call function with data array
interestCalculator (data);

