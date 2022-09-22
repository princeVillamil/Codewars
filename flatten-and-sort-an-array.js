/*
Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more informatio
*/
"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return [].concat(...array).sort((a,z) => a-z)
}