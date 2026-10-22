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

    // B3.4: Extracts characters from index 5 up to 9.
console.log("Sliced string:", myString.slice(5, 9));

// Extracts "the".
console.log("Substring:", anotherString.substring(6, 9));

    // B3.5: Displays my name in uppercase.
console.log("Uppercase name:", myName.toUpperCase());

// Displays my name in lowercase.
console.log("Lowercase name:", myName.toLowerCase());

    // B3.6: Joins the greeting and my name with a separating space.
console.log("Combined string:", hello.concat(" ", myName));

// Removes the leading and trailing spaces from anotherString.
console.log("Trimmed string:", anotherString.trim());

// Replaces "is a" with one space and displays the surrounding quotation marks.
console.log("Replaced string:", JSON.stringify(myString.replace("is a", " ")));

// Splits myString into an array using spaces as separators.
console.log("Split string:", myString.split(" "));

    // B3.8: Loads Node.js functions for reading and writing files.
const fs = require("node:fs");

// Loads Node.js functions for constructing file paths.
const path = require("node:path");

// Locates output.txt in the same folder as this script.
const filePath = path.join(__dirname, "output.txt");

// Stores the text that will be written to the file.
const fileContents = "My name is Luciano. This is my B3 file handling example.";

// Writes the string to output.txt using UTF-8 encoding.
fs.writeFileSync(filePath, fileContents, "utf8");

// Confirms that the write operation completed.
console.log("File written:", filePath);