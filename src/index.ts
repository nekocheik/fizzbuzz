export function fizzBuzz(n: number): string | number { 
  const isMultipleOfThree = isMultipleOf(3 , n)
  const isMultipleOfFive = isMultipleOf(5 , n) 
  let result = "" 

  if (isMultipleOfThree) { 
    result += "Fizz" 
  } 
  if (isMultipleOfFive) {
    result += "Buzz" 
  }
  return result || n;
}

export function isMultipleOf(multiple : number, n: number): boolean {
  return  n % multiple === 0
} 


/*
*
* Assuming `n` is a natural integer,

- If `n` is a multiple of 3, return "Fizz"
- If `n` is a multiple of 5, return "Buzz"
- If `n` is a multiple of 3 and 5, return "FizzBuzz"
- Else return `n`
*
* */
