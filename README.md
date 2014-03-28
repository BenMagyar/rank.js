rank.js
=======

## Install
```
npm install rank.js
```

## Use
```
var rank = require('rank.js');
```

### Rankings

#### Standard

Applies a naive ranking to a given array over a specified key 
in ascending order. 

```
array = rank.standard(array, key);
```

##### Example

```
array = [{ x : 1},{ x : 3},{x : 2}];
array = rank.standard(array,'x');
console.log(array); 
```

```
> [{x : 1, rank : 1},{x : 2, rank : 2},{x : 3, rank : 3}]
```

#### Fractional

Applies a standard ranking and then computes the average of tied
elements in the array. 

```
array = rank.fractional(array, key);
```

##### Example

```
array = [{ x : 1},{ x : 3},{x : 1}];
array = rank.fractional(array,'x');
console.log(array); 
```

```
> [{x : 1, rank : 1.5},{x : 1, rank : 1.5},{x : 3, rank : 3}]
```

