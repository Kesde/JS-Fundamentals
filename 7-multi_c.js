const arg = process.argv[2];
const arg1 = parseInt(arg); // Convert the argument to an integer
if (Number.isNaN(arg1)) {
  console.log("Missing number of occurrences");
} else {
  for (let x = 0; x < arg; x++) {
    console.log("C is fun");
  }
}

