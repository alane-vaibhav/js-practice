// Math.abs()---> return positive value
// Math.round(4.5)----> return nearest complete value 5
// Math.ceil(4.3) ----> whole number with upper end 5
// Math.floor(4.6) ---- > whole number with lower end 4

// console.log(Math.floor(4.6));

//Math.random()---> any value between 0 to 1


// (Math.random()*10)

// to avoid values between 0 to 0.1 like 0.001/0.002 to get whole number

//add 1 

// ((Math.random()*10)+1)

//  console.log(Math.ceil(0.44));

// Q. Print number between any range

let min=7;
let max=19;

let output=Math.floor((Math.random()* (max-min +1 )+min))
console.log(output)