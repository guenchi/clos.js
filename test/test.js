
const {make, slotref, slotset} = require('clos.js');


let Humain = make()('name','age','gender')();
let Work = make()('local')();


let Secretary = make(Humain, Work)('local')('office');
let Worker = make(Humain, Work)('local')('usine'); 
let Race = make(Humain)('nationality');
let Chinese = Race('chinese');
let French = Race('french');


let lucy = make(Secretary)('name', 'age', 'gender')('lucy', 16, 'female');
let workers = make(Worker, French)('name', 'age', 'gender');
let tom = workers('tom', 25, 'male');
let sam = workers('sam', 32, 'male');
let susan = make(Chinese, lucy)('name', 'age')('susan', 18);

console.log(lucy);
console.log(tom);
console.log(sam);
console.log(susan);

slotset(susan, 'age', slotref(lucy, 'age'));

console.log(susan);

