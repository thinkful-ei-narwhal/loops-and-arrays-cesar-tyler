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

//2 

const object = {
  foo: 'bar',
  bar: 'foo',
  fum: 'fee',
  quux: 'quark',
  spam: 'ham'
};

for (let key in object) {
  console.log(`${key} has ${object[key]}`);
}

//4

const player1 = {
  name: 'Tyler',
  jobTitle: 'Bard'
};

const player2 = {
  name: 'Cesar',
  jobTitle: 'Warrior'
};

const player3 = {
  name: 'Brett',
  jobTitle: 'Druid'
};

const player4 = {
  name: 'Frank',
  jobTitle: 'Gamemaster'
};

let arr = [player1, player2, player3, player4];

for (let i=0; i <= arr.length;i++) {
  console.log(arr[i]);
}

//5
for (let i = 0; i < arr.length; i++) {
  if (arr[i].jobTitle !== 'Gamemaster') {
    arr[i].boss = 'Frank';
    console.log(`${arr[i].jobTitle} ${arr[i].name} reports to ${arr[i].boss}`);
  } else
    console.log(`${arr[i].jobTitle} ${arr[i].name} doesn't report to anybody.`);
  
}



//8
