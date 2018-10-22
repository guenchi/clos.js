# clos.js
CLOS (Common Lisp Object System) JavaScript Implementation


***Class***

```
defclass()( slot, ...);

let Gender = defclass()('gender');
let Nationality = defclass()('nation');
```

***Instantiate***

```
class( value, ...);

let Man = Gender('man');
let Woman = Gender('woman');
let Chinese = Nationality('chinese');
```

***Inheritance***
```
defclass( super, ...)( slot, ...);

let Worker = defclass(Chinese, Man)('name', 'age');
let Secretary = defclass(Chinese, Woman)('name', 'age');
```

***Slot-ref***
```
let sam = Worker('sam', 32);
let lucy = Secretary('lucy', 16);

lucy.gender;
> 'woman'
sam.age;
> '32'
```

***Method***

```
let ageOfNextYear = o => o.age + 1;
let nationChange = (o, n) => o.nation = n;

ageOfNextYear(sam);
> 33
nationChange(lucy, 'french');
lucy.nation;
> 'french'
```
