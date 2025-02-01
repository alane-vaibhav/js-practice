const fruits = ["Banana", "Orange", "Apple", "Mango", 'cherry'];

// At position 2, add "Lemon" and "Kiwi"
// fruits.splice(1, 2, 'hhhhh');

// console.log(fruits);
   
//===========================for splice method==========================================

// if pass only 1 -- return original till that index excluding index element

// if pass 2 ---- return original excluding first to last index element

// if pass more than 3--- return original by replacing between first to last with all from 3rd passed element


//===========================for slice method==========================================

// if pass only 1 -- return new from that index 

// if pass 2 ---- return new from first to last-1 index element (excludes last)

const newmm=fruits.slice(2, 4)

console.log(newmm);
