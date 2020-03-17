/* eslint-disable strict */
//2 

const object = {
  foo: 'bar',
  bar: 'foo',
  fum: 'fee',
  quux: 'quark',
  spam: 'ham'
};

for (key in object) {
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
