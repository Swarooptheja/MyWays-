function fizzbuzz(num) {
  const sum = [...num].reduce((acc, digit) => acc + parseInt(digit), 0);
  for (let i = 1; i <= sum; i++)
  {
    if (i % 4 === 0 && i % 5 === 0) 
    {
      console.log("FizzBuzz");
    } 
    else if (i % 4 === 0) 
    {
      console.log("Fizz");
    } 
    else if (i % 5 === 0)
    {
      console.log("Buzz");
    }
    else
    {
      console.log(i);
    }
  }
}
fizzbuzz("9000000099")
