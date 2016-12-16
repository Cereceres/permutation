'use strict'
const assert = require('assert')
const permutate  = require('../index')

describe('The test to permutation', function () {
    it('test to array what is cyclic to right of two items', function () {
      assert.deepEqual(permutate.right([1,2]), [2,1])  
    })
    it('test to array what is cyclic to right', function () {
      assert.deepEqual(permutate.right([1,2,3,4,5,6]), [6,1,2,3,4,5])  
    })
    it('test to array what is cyclic to left of two items', function () {
      assert.deepEqual(permutate.left([1,2]), [2,1])  
    })
    it('test to array what is cyclic to left', function () {
      assert.deepEqual(permutate.left([1,2,3,4]), [2,3,4,1])  
    })
    
    it('test to array what is cyclic to left with a item', function () {
      assert.deepEqual(permutate.left([1]), [1])  
    })
    
    it('test to array what is cyclic to right with a item', function () {
      assert.deepEqual(permutate.right([1]), [1])  
    })
})