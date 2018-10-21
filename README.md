# clos.js
CLOS (Common Lisp Object System) JavaScript Implementation


```
> let Gender = defclass()("gender");
> let Man = Gender("man");
undefined
> let Woman = Gender("woman");
undefined
> let Nationality = defclass()("nation");
undefined
> let Chinese = Nationality("chinese");
undefined
> let Secretary = defclass(Chinese, Woman)("name","age");
undefined
> let Worker = defclass(Chinese, Man)("name","age");
undefined
> let lucy = Secretary("lucy",16);
undefined
> lucy
{ nation: 'chinese', gender: 'woman', name: 'lucy', age: 16 }
> let sam = Worker("sam",32);
undefined
> sam
{ nation: 'chinese', gender: 'man', name: 'sam', age: 32 }
> 
```
