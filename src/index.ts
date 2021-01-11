export function fizzBuzz(n: number): string | number {
    return n % 3 === 0 ? 'Fizz' : n;
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
