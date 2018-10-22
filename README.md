# clos.js
CLOS (Common Lisp Object System) JavaScript Implementation


**defclass** to define the class:

`defclass()( slots, ...);`

`let Gender = defclass()("gender");`

instantiate

`class( values, ...);`

`let Woman = Gender("woman");`

inheritance

`defclass()( slots, ...);`

```
let Gender = defclass()("gender");



let Nationality = defclass()("nation");

let Chinese = Nationality("chinese");

let Secretary = defclass(Chinese, Woman)("name", "age");

let Worker = defclass(Chinese, Man)("name", "age");

let lucy = Secretary("lucy", 16);

lucy
{ nation: 'chinese', gender: 'woman', name: 'lucy', age: 16 }

let sam = Worker("sam",32);

sam
{ nation: 'chinese', gender: 'man', name: 'sam', age: 32 } 
```
