export function fizzBuzz(n: number): string | number { 
  if (isMultipleOf(3 , n)) { 
    return "Fizz" 
  } 
  if (isMultipleOf(5, n)) {
    return "Buzz" 
  }
  return n;
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
