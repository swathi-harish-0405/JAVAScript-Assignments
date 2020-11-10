//Q-1

var fourNums = [...Array(4)].map(() => Math.floor(Math.random() * 9));
document.body.innerHTML = fourNums;
console.log(fourNums)