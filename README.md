[![Build Status](https://travis-ci.org/Cereceres/permutation.svg?branch=master)](https://travis-ci.org/Cereceres/permutation)
# permutation
make permutation of a array given.
## Install
This method permutate the item in a array given
```bash
$ npm install array-permutation
```

## Usage

```js
const permutate  = require('array-permutation')
permutate.right([1,2]) // -> [2,1]
permutate.right([1,2,3,4,5,6]) // -> [6,1,2,3,4,5]  
permutate.left([1,2]) // -> [2,1]
permutate.left([1,2,3,4])// -> [2,3,4,1]
permutate.left([1]) // [1]
permutate.right([1]) // [1] 
```
## API Documentation permutation -> object
### permutation.right(array) -> array
The param is the right what will be permutated to right. The array is passed by reference.
### permutation.right(array) -> array
The param is the right what will be permutated to left. The array is passed by reference.
