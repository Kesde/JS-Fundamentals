const argument = process.argv
const num = parseInt(argument[2]); // Convert the argument to an integer
if (isNaN(num)) {
    console.log('Not a Number');
} else { 
      console.log('My Number:', num); // Output the number
}
