import { fizzBuzz, isFizz, isBuzz } from ".";

describe("Else return n", () => { 
  it("Should return 1 for n = 1", () => {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("Should return 2 for n = 2", () => {
    expect(fizzBuzz(2)).toEqual(2);
  });
});

describe("Else return Fizz", () => {
  it("Should return 'Fizz' for n = 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("Should return 'Fizz' for n multiple of 3", () => {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });
});

describe("if multiple of five return Buzz", () => { 
  it("Should return 'Buzz' if n is a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz")
  });

  it("Should return 'Buzz' if n is a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual("Buzz")
  }); 
}); 

describe("if multiple of five and three return FizzBuzz", () => { 
  it("Should return 'Buzz' if n is a multiple of 5 and 3", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
  }); 
  it("Should return 'Buzz' if n is a multiple of 5 and 3", () => {
    expect(fizzBuzz(30)).toEqual("FizzBuzz")
  }); 
});
