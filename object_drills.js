'use strict';

//---------------------------------Object initializers and methods------------------------------
const loaf ={
  flour:300,
  water:210,
  hydration: function(){
    return (this.water*this.flour)/100;
  }
};
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());
//---------------------------------Arrays in objects---------------------------------------------

const eat ={
  meal:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(eat.meal[3]);
//---------------------------------Cracking the code---------------------------------------------


const decoder ={
  a:1, b:2, c:3, d:4,
  e: ' ', f: ' ',g: ' ',
  h: ' ', i: ' ',j: ' ',
  k: ' ', l: ' ',m: ' ',
  n: ' ', o: ' ',p: ' ',
  q: ' ', r: ' ',s: ' ',
  t: ' ', u: ' ',v: ' ',
  w: ' ', x: ' ',y: ' ',
  z: ' '
}; 

function decode(arr) {
  let decoded='';
  arr.forEach(element => { 
    if(typeof decoder[element[0]]=== 'number'){
      decoded += element[decoder[element[0]]];
    }
    else{
      decoded +=decoder[element[0]];
    }        
  });
  return decoded;
}

function decodeWords(word){
  let arr = word.split(' ');
  let decoded = decode(arr);
  return console.log(decoded);
} 
decodeWords('craft block argon meter bells brown croon droop');
