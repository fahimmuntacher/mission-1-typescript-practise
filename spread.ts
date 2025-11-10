// Spread operator
const friends = ["Sami", "Saimon"];

const schoolFriends = ["Noman", "Salam", "Musa", "Shourav", "Al-Amin"];
const collegeFriends = ["Nazmul", "Riyaz", "Abeer"];

friends.push(...collegeFriends, ...schoolFriends)
console.log(friends);

// Spread in object
const info = {name : "Fahim", age: 19};
const otherInfor = {hobby : "Learning", dream: "Engineer"}

const userInfo = {...info, ...otherInfor};
console.log(userInfo);
