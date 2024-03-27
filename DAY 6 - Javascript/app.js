// Array

// let fruit = "Mango";
// console.log(fruit);
// console.log(typeof(fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);
//Access elements
console.log(fruits[2]);

//Length of the index
console.log(fruits.length);

//Update elements
fruits[1] = 'Avocado'
console.log(fruits);

//Adding elements
//1st way = Add element at the end of the array
fruits.push("Dewberry");
console.log(fruits);

//Add element at the beginning of the array
fruits.unshift("Banana");
console.log(fruits);

//Deleting elements
//Deleting element at the end of the array
fruits.pop()
console.log(fruits)

//Delete element at the beginning of the array
fruits.shift()
console.log(fruits)

//Sorting elements
//Alphabetically
fruits.sort()
console.log(fruits)

//Sorting in reverse
fruits.sort().reverse()
console.log(fruits)

//Searching
//Indexof Method
let index = fruits.indexOf('Avocado');
console.log(index);

//Check if an element is present
//Includes Method
console.log("Is Apple in fruites: ",fruits.includes("Apple"));

//Join
//Join Method
console.log("Joined fruits: ",fruits.join("-"));

//Slice Method
// let sliced_fruits = fruits.slice(1,3);
// console.log(sliced_fruits);
console.log(fruits);

// //Splice Method
// fruits.splice(0,2);
// console.log(fruits);

//Looping through the elements
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// //For loop
// for (let i = 0; i < fruits.length; i++ ){
//     console.log(fruits[i]);
// }

//Reverse for loop
// for (let i = fruits.length; i >= 0; i--){
//     console.log(fruits[i]);
// }

//For of Loop
for (fruit of fruits){
    console.log(fruit);
}