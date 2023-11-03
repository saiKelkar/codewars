/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

//My solution
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears, dogYears = 0;
    let allYears = [humanYears, catYears, dogYears];
    
    if(humanYears == 1) {
      allYears[1] = 15;
      allYears[2] = 15;
    } else if(humanYears == 2) {
      allYears[1] = (15 + 9);
      allYears[2] = (15 + 9);
    } else if(humanYears > 2) {
      allYears[1] = 15 + 9 + 4 * (humanYears - 2);
      allYears[2] = 15 + 9 + 5 * (humanYears - 2);
    }
    
    return allYears;
  }
