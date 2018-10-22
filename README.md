# clos.js
CLOS (Common Lisp Object System) JavaScript Implementation


**defclass** to define the class:

```
defclass()( slots, ...);

let Gender = defclass()("gender");
let Nationality = defclass()("nation");
```

***Instantiate***

```
class( values, ...);

let Man = Gender("man");
let Woman = Gender("woman");
let Chinese = Nationality("chinese");
```

***Inheritance***
```
defclass( supers, ...)( slots, ...);

let Worker = defclass(Chinese, Man)("name", "age");
let Secretary = defclass(Chinese, Woman)("name", "age");
```

```
let sam = Worker("sam",32);
let lucy = Secretary("lucy", 16);

sam
{ nation: 'chinese', gender: 'man', name: 'sam', age: 32 } 
lucy
{ nation: 'chinese', gender: 'woman', name: 'lucy', age: 16 }
```
