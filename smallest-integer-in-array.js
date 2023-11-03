/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//My solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let minValue = Math.min.apply(Math, args); //finds the minimum value in the numbers array
      //apply(Math, args) - used to pass the elements of an array, args in this case
      //this within the function is set to Math
      return minValue;
    }
  }
