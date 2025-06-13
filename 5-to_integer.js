const argument = process.argv[2]; // Get the command line argument
const index = parseInt(argument); // Convert the argument to an integer
if (Number.isNaN(index)) {
  console.log("Not a number");
} else {
  console.log("My number:", index); // Output the number
}
