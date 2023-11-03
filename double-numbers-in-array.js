/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

//My solution
function maps(x){
    let new_x = []; //making a new array
    for(let i = 0; i < x.length; i++) {
      new_x.push(2 * x[i]); //pushes the doubled number to the array
    }
    return new_x;
  }
