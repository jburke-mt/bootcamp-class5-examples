//Sums all the numbers from 1 to 10
function sum1ToCount(count) {
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += i;
        console.log(sum);
    }

    console.log("Total: " + sum);
}

// sum1ToCount(100);

//Iterates through the array Cars, and prints the name of each car.
function printCars() {
    let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    for (let i = 0; i < cars.length; i++) {
        i++; // i += 1; // i = i + 1;
        console.log(cars[i]);
    }
}

// printCars();

//Shorthand version of the printCars() method
function printCarsForOf() {
    let cars = ["BMW", "Volvo", "Mini"];

    for (let car of cars) {
        console.log(car);
    }
}

// printCarsForOf();

function printCars() {
    let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    let i = 0;
    while (i < cars.length) {
        console.log(cars[i]);
        i++;
    }
}

// printCars();

function zip() {
    let before = [1, 2, 3, 4];
    let result = [];
    for (let i = 0; i < before.length / 2; i += 2) {
        result.push(before[i] + before[i + 1]);
    }
}

let i = 0;
let j = 0;

while (i < 5) {
    console.log(++i);
}

while (j < 5) {
    console.log(j++);
}
