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
