
//Question no 1
function calculateDifference(a, b) {
    return a - b;
}

// Example usage
const result = calculateDifference(10, 5);
console.log(result);  // Output will be 5


//Question no 2
function isOdd(num) {
    return num % 2 !== 0;
}

// Example usage
console.log(isOdd(3));  // Output: true (since 3 is odd)
console.log(isOdd(4));  // Output: false (since 4 is even)


//Question no 3
function findMin(arr) {
    return Math.min(...arr);
}

// Example usage
const numbers1 = [10, 5, 8, 3, 12];
console.log(findMin(numbers1));  // Output: 3


//Question no 4
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers2);
console.log(evenNumbers);  // Output: [2, 4, 6]


//Question no 5
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// Example usage
const numbers3 = [5, 1, 8, 3, 7];
const sortedNumbers = sortArrayDescending(numbers3);
console.log(sortedNumbers);  // Output: [8, 7, 5, 3, 1]


//Question no 6
function lowercaseFirstLetter(str) {
    if (!str) return str;  // Handle empty string or null input
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// Example usage
console.log(lowercaseFirstLetter("Hello"));  // Output: "hello"
console.log(lowercaseFirstLetter("JavaScript"));  // Output: "javaScript"


//Question no 7
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}

// Example usage
console.log(countVowels("Hello World"));  // Output: 3
console.log(countVowels("JavaScript"));   // Output: 3


//Question no 8
function findAverage(arr) {
    if (arr.length === 0) return 0;  // Handle empty array
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
console.log(findAverage(numbers));  // Output: 30
