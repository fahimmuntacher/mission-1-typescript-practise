// ? => ternary operator 
// ?? => nullish coalescing operator : null / unefined 
// ?. => optional chaining

const canVote = ( age : number) => {
    const result = age >= 18 ? "You can vote" : "You're a child";
    return result;
}

console.log(canVote(20));

//  nullish coalescing operator
const userTheme = undefined;
const selectedTheme = userTheme ?? "Light Theme";
console.log(selectedTheme);