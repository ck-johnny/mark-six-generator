// Function to get a unique random number between min and max.
const getRandomNumber = (min: number, max: number, exclude: Set<number>): number => {
    let randomNum: number;
    do {
        randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    } while (exclude.has(randomNum));
    return randomNum;
}

const generateUniqueNumbers = (count: number, min: number, max: number): number[] => {
    const uniqueNumbersSet = new Set<number>();

    while (uniqueNumbersSet.size < count) {
        const number = getRandomNumber(min, max, uniqueNumbersSet);
        uniqueNumbersSet.add(number);
    }

    return Array.from(uniqueNumbersSet);
}

// Define the range for the lottery numbers and the count of numbers to generate.
const min = 1;
const max = 49;
const count = 6;

// Generate and sort unique random numbers, and then log them to the console.
const uniqueNumbers = generateUniqueNumbers(count, min, max).sort((a, b) => a - b);
console.log(uniqueNumbers);
