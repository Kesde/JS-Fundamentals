const argument = process.argv
const Num = parseInt(argument[2]); // Convert the argument to an integer
if (isNaN(Num)) {
    console.log('Not a Number');
} else { 
      console.log('My Number:', Num); // Output the number
}
