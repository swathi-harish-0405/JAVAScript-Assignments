//Q-2

var hundredNums = [...Array(100)].map(() => Math.floor(Math.random() * 99));
document.body.innerHTML = hundredNums;
console.log(hundredNums)