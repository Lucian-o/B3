// Script for B3 - String manipulation and files.

    // B3.2: Stores the main string used in the exercises.
const myString = "This is a string";

// Stores another string with three leading spaces.
const anotherString = "   Another string";

// Stores the greeting.
const hello = "Hello there!";

// Stores my first name.
const myName = "Luciano";

// Displays the strings.
console.log("myString:", myString);
console.log("anotherString:", JSON.stringify(anotherString));
console.log("hello:", hello);
console.log("myName:", myName);

    // B3.3: Displays the number of characters, including spaces.
console.log("String length:", myString.length);

// Displays the first character.
console.log("First character:", myString.charAt(0));

// Displays the eleventh character.
console.log("Eleventh character:", myString.charAt(10));

    // B3.4: Extracts characters from index 5 up to, but excluding, index 9.
console.log("Sliced string:", myString.slice(5, 9));

// Extracts "the", accounting for anotherString's three leading spaces.
console.log("Substring:", anotherString.substring(6, 9));

    // B3.5: Displays my name in uppercase.
console.log("Uppercase name:", myName.toUpperCase());

// Displays my name in lowercase.
console.log("Lowercase name:", myName.toLowerCase());