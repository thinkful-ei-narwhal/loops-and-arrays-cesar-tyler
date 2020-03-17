'use strict';

function average (num){
  let sum= 0;
  num.forEach(element => {
    sum += element;   
  });
  return sum/num.length;
}

console.log(average([5,6,9,5,2,4]));