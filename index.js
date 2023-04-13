function fizzbuzz(number) {
  const number_sum = [...number].reduce((acc, digit) => acc + parseInt(digit), 0); // calculate the sum of the digits in the phone number
  for (let i = 1; i <= number_sum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      process.stdout.write("FizzBuzz ");
    } else if (i % 4 === 0) {
      process.stdout.write("Fizz ");
    } else if (i % 5 === 0) {
      process.stdout.write("Buzz ");
    } else {
      process.stdout.write(i+" " );
    }
  }
}

fizzbuzz("9000000099")
