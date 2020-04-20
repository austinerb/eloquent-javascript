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
