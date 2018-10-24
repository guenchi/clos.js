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

let man = Gender('man');
let woman = Gender('woman');
let chinese = Nationality('chinese');
```

***Inheritance***
```
defclass( super, ...)( slot, ...);

let Worker = defclass(chinese, man)('name', 'age');
let Secretary = defclass(chinese, woman)('name', 'age');
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
