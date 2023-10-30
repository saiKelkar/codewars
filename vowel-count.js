/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//My solution
function getCount(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    const arr = str.split('');
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < vowels.length; j++){
        if(arr[i] === vowels[j]){
          count ++;
        }
      }
    }
    return count;
  }