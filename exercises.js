// CHAPTER 2

// Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// for (let i = 1; i < 8; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log("#");
//     }
//     console.log("\n");
// }


// FizzBuzz

// print fizz for numbers div by 3
// print buzz for numbers div by 5
// print fizzbuzz for numbers div by both

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log("Fizz");
//   } else if (i % 3 != 0 && i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }


// Chessboard

// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the
// grid there is either a space or a "#" character. The characters should form a chessboard.

// When you have a program that generates this pattern, define a binding size = 8
// and change the program so that it works for any size, outputting a grid of the
// given width and height.

// let height = 12, width = 5, board = "", offset = 0;
//
// for (let i = 0; i < height; i++) {
//   for (let j = 0; j < width; j++) {
//     // check which char to append given the offset of the board
//     if (j % 2 == offset) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
//   // update the offset for each line
//   if (offset == 0) {
//     offset = 1;
//   } else {
//     offset = 0;
//   }
// }
// console.log(board);


// CHAPTER 3


// Minimum

// Write a function min that takes two arguments and returns their minimum.

// console.log(min(1,2));
// console.log(min(3,2));
// console.log(min(3,3));
//
// function min(x, y) {
//   if (x < y) return x;
//   else if (y < x) return y;
//   return -1;
// }


// Recursion

// function isEven(x) {
//   if (x === 1) {
//     return "odd";
//   } else if (x === 0) {
//     return "even";
//   } else {
//     return isEven(x-2);
//   }
// }
//
// console.log(isEven(20));
// console.log(isEven(31));


// Bean counting

// function countBs(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "B") {
//       count++;
//     }
//   }
//   return count;
// }
//
// function countChar(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
//
// console.log(countBs("BaBy"));
// console.log(countBs("Baby"));
// console.log(countBs("BBBbbB"));
// console.log(countChar("ABCDA", "A"));


// CHAPTER 4


// The sum of a range

// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.

// function range(start, end) {
//   let values = [];
//   for (let i = start; i <= end; i++) {
//     values.push(i);
//   }
//   return values;
// }
//
// console.log(range(1,5));
// console.log(range(10,15));

// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does indeed
// return 55.

// function sum(range) {
//   let sum = 0;
//   for (let i = 0; i < range.length; i++) {
//     sum += range[i];
//   }
//   return sum;
// }
//
// let values = [10, 11, 12, 13, 14, 15];
// console.log(sum(values));

// As a bonus assignment, modify your range function to take an optional
// third argument that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding
// to the old behavior. The function call range(1, 10, 2) should return
// [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
// range(5, 2, -1) produces [5, 4, 3, 2].

// function rangeStep(start, end, step = 1) {
//   let values = [];
//   if (step > 1) {
//     for (let i = start; i <= end; i++) {
//       if ((i - start) % step == 0) {
//         values.push(i);
//       }
//     }
//   } else {
//     for (let i = start; i >= end; i--) {
//       if ((i - start) % step == 0) {
//         values.push(i);
//       }
//     }
//   }
//   return values;
// }
//
// console.log(rangeStep(1,5,2));
// console.log(rangeStep(10,25,3));
// console.log(rangeStep(40,-25,-5));


// Reversing an array

// The first, reverseArray, takes an array as argument and produces a new array
// that has the same elements in the inverse order.

// function reverseArray(arr) {
//   let newArr = [];
//   for (let i = arr.length-1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(reverseArray(["A", "B", "C"]));

// The second, reverseArrayInPlace, does what the reverse method does: it
// modifies the array given as argument by reversing its elements.

// function reverseArrayInPlace(arr) {
//   let cpy = arr.slice(0, arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = cpy[arr.length-1-i];
//   }
// }
//
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);


// A List

// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument.

// function arrayToList(arr) {
//   let list = {};
//   let currentObj = null;
//   for (let i = arr.length-1; i >= 0; i--) {
//     currentObj = {value: arr[i], rest: currentObj};
//   }
//   list = currentObj;
//   return list;
// }
//
// console.log(arrayToList([10, 20]));

// Also write a listToArray function that produces an array from a list.

// function listToArray(list) {
//   let arr = [];
//   let count = 0;
//   let rest = list;
//   while (rest != null) {
//     arr[count] = rest.value;
//     count++;
//     rest = rest.rest;
//   }
//   return arr;
// }
//
// console.log(listToArray(arrayToList([10, 20, 30])));

// Then add a helper function prepend, which takes an element and a list and
// creates a new list that adds the element to the front of the input list.

// function prepend(e, list) {
//   return {value: e, rest: list};
// }
//
// console.log(prepend(10, prepend(20, null)));

// nth, which takes a list and a number and returns the element at the given
// position in the list (with zero referring to the first element) or undefined
// when there is no such element.

// function nth(list, num) {
//   if (num == 0) return list.value;
//   else {
//     return nth(list.rest, num-1);
//   }
// }
//
// console.log(nth(arrayToList([10, 20, 30]), 1));


// Deep Comparison

// Write a function deepEqual that takes two values and returns true only if
// they are the same value or are objects with the same properties, where the
// values of the properties are equal when compared with a recursive call to
// deepEqual.

// function deepEqual(val1, val2) {
//   if (val1 == null && val2 == null) return true;
//   else if (val1 == null || val2 == null) return false;
//   else if (typeof val1 == "object" && typeof val2 == "object") {
//     let keys1 = Object.keys(val1);
//     let keys2 = Object.keys(val2);
//
//     if (keys1.length != keys2.length) return false;
//
//     for (let i = 0; i < keys1.length; i++) {
//       keyName = keys1[i];
//       let keyVal1 = val1[keyName];
//       let keyVal2 = val2[keyName];
//
//       if (!deepEqual(keyVal1, keyVal2)) return false;
//     }
//   } else {
//     return val1 === val2;
//   }
//
//   return true;
// }
//
// let obj = {here: {is: "an"}, object: 2};
// console.log(null, null, deepEqual(null, null));
// console.log(null, "a", deepEqual(null, "a"));
// console.log("b", "a", deepEqual("b", "a"));
// console.log("b,b", deepEqual("b", "b"));
// console.log("obj", "obj", deepEqual(obj, obj));
// console.log("obj", "non obj", deepEqual(obj, {here: 1, object: 2}));
// console.log("obj", "eq obj", deepEqual(obj, {here: {is: "an"}, object: 2}));



// CHAPTER 5


// Flattening (DIDN'T SOLVE)

// Use the reduce method in combination with the concat method to “flatten” an
// array of arrays into a single array that has all the elements of the original
// arrays.

// let arrays = [[1, 2, 3], [4, 5], [6]];
//
// var flat = arrays.reduce(function(a, b) {
//       return a.concat(b);
// });
//
// console.log(flat);


// Your Own Loop

// Write a higher-order function loop that provides something like a for loop
// statement. It takes a value, a test function, an update function, and a body
// function. Each iteration, it first runs the test function on the current loop
// value and stops if that returns false. Then it calls the body function,
// giving it the current value. Finally, it calls the update function to create
// a new value and starts from the beginning.

// function loop(val, test, update, body) {
//   while (test(val)) {
//     body(val);
//     val = update(val);
//   }
// }
//
// loop(3, n => n > 0, n => n - 1, console.log);


// Everything

// Implement every as a function that takes an array and a predicate function
// as parameters. Write two versions, one using a loop and one using the some
// method.

// function every1(arr, test) {
//   for (let i in arr) {
//     if (!test(arr[i])) return false;
//   }
//   return true;
// }
//
// console.log(every1([1, 3, 5], n => n < 10));
// console.log(every1([2, 4, 16], n => n < 10));
// console.log(every1([], n => n < 10));
//
// function every2(arr, test) {
//   return !arr.some(e => !test(e));
// }
//
// console.log(every2([1, 3, 5], n => n < 10));
// console.log(every2([2, 4, 16], n => n < 10));
// console.log(every2([], n => n < 10));


// CHAPTER 6

// A Vector Type

// Write a class Vec that represents a vector in two-dimensional space. It
// takes x and y parameters (numbers), which it should save to properties of
// the same name.

// Give the Vec prototype two methods, plus and minus, that take another
// vector as a parameter and return a new vector that has the sum or difference
// of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of
// the vector—that is, the distance of the point (x, y) from the origin (0, 0).

// class Vec {
//   constructor (x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   plus(plusVec) {
//     return new Vec(this.x + plusVec.x, this.y + plusVec.y);
//   }
//
//   minus(minusVec) {
//     return new Vec(this.x - minusVec.x, this.y - minusVec.y);
//   }
//
//   get length() {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// }
//
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);


// Groups
