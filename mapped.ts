// mapped type

// map : 
const arrOfNumbers : number[] = [1, 2, 3, 4];
const arrOfString : string[] = ["1", "2", "3", "4"];
const arrOfStirngUsingMap : string[] = arrOfNumbers.map(num => num.toString());

console.log(arrOfStirngUsingMap); 