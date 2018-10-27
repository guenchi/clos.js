# clos.js
CLOS JavaScript Implementation

***What is CLOS?***

CLOS, an acronym for Common Lisp Object System, is a standard set of extensions to the Common Lisp language to help people do object-oriented programming in Lisp. 

***CLOS vs. other approaches to OOP***

The most popular object-oriented languages today (e.g. C++ and Java) share much of their syntax and much of their philosophy. CLOS have a Lisp-like syntax, very different from the block-structured syntax of the other languages mentioned above. They share the notions of run-time polymorphism (i.e. a function that works in several different ways depending on the kinds of objects to which it is applied), inheritance, etc. with essentially all other OO languages. And like most OO languages, CLOS consider every "object" to be an element of a "class", which may be written in terms of one or more "superclasses".
The most significant difference between CLOS and the other languages mentioned above is that in CLOS, a polymorphic function looks and behaves like an ordinary function, not tied to any one class of objects. By contrast, every polymorphic function in C++, Java, et al 'belongs' to one particular class, and must be invoked in conjunction with an instance of that class. For example, suppose there were a class named dial and a polymorphic function named turn, and we wished to turn the dial ThisDial to setting 200. A C++ programmer would write 

`ThisDial.turn (200); `

while a CLOS programmer would write 

`turn(ThisDial 200); `

The distinction is not merely syntactic: in C++, an action that involves multiple objects must "belong" to one of them, with the rest as parameters. For another example, suppose there are two classes named LightBulb and socket, and we wish to write a polymorphic function that (among other things) puts a light bulb into a socket. In C++ (or Java or ...), the programmer must choose whether to write a method for light bulbs, taking a socket as a parameter, or a method for sockets, taking a light bulb as a parameter: 

`ThisBulb.PutIn (ThatSocket); `

`ThatSocket.PutIn (ThisBulb); `

whereas the CLOS programmer simply writes 

`PutIn(ThisBulb, ThatSocket);` 

In effect, a polymorphic function (called a "generic function" in CLOS terminology) is an ordinary function with multiple definitions, which automatically chooses the most appropriate definition at run time based on the classes of its arguments. No one argument is singled out as "the object" to which the method applies, and there is little need for the C++ construct called a "friend", a function applied to an object of one class which nonetheless has access to the private information of objects of another class.

This choice has several advantages, as pointed out above. It also has disadvantages: since a method belongs not to one specific class but to a combination of classes, it is much more difficult to control the visibility of methods, and the public/protected/private distinction in C++ cannot be applied to methods. Whether you consider these disadvantages to outweigh the advantages is a personal, almost religious, decision. 

***Classes and Objects in CLOS***

In CLOS, as in most object-oriented languages, every "object" is an element of one or more "classes", whose definitions may be derived from the definitions of other "superclasses". The behavior of an object is determined by its class(es): here "behavior" refers to

instance variables, i.e. information associated with each object in the class

methods, i.e. how various functions are implemented when applied to objects in the class

and possibly other things like class or pool variables which we sha'n't discuss at this point



***Creating classes***

```
make()( slot, ...)( init, ...);

let Humain = make()('name','age','gender')();
let Work = make()('local')();
```

***Inheritance***
```
make( class, ...)( slot, ...)( init, ...);

let Worker = make(Humain, Work)('local')('usine'); 
let Secretary = make(Humain, Work)('local')('office');
```

***Creating instances***

```
make( class, ...)( slot, ...)( value, ...);

let lucy = make(Secretary)('name', 'age', 'gender')('lucy', 16, 'female');
```

***Creating sets***
```
make( class, ...)( slot, ...);

let Race = make(Humain)('nationality');
let Chinese = Race('chinese');
let French = Race('french');
let workers = make(Worker, French)('name', 'age', 'gender');
let tom = workers('tom', 25, 'male');
let sam = workers('sam', 32, 'male');
```

***Coping prototype***
```
make( prototype, ...)( slot, ...)( value, ...);

let susan = make(Chinese, lucy)('name', 'age')('susan', 18);
```

***Slot-ref***
```
lucy.gender;
> 'female'
sam.age;
> '32'
```


***Generic functions and methods***

```
let ageOfNextYear = o => o.age + 1;
let nationChange = (o, n) => o.nation = n;

ageOfNextYear(sam);
> 33
nationChange(lucy, 'french');
lucy.nation;
> 'french'
```

