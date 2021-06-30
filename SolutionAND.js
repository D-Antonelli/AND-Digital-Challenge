/**
* The following is the function where the solution shall be written
*/
function solution (input) {
  // /d is equal to "digit" in regex
  const regex = /\d/g;
  input = input.match(regex).join("");

  if(!regex.test(input) || !input || typeof input !== "string") {
    throw new Error("input does not contain number or input is falsy value or input is not string");
  }
  else if(input.length < 2) {
    return input;
  }
    let variations = [];

   
    for(let i=0; i < input.length; i++) {
    let char = input[i];

  //identify if character has been parsed before
    if (input.indexOf(char) !== i){
      continue;
    } 

    let remainingChars = input.slice(0, i) + input.slice(i + 1, input.length);

    for(let permutation of solution(remainingChars)) {
      variations.push(char + permutation);
    }
  }
   return variations.sort((a, b) => b -a);
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236

module.exports = solution;

