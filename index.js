'use strict'
/**
 * @function
 * @param {array} - arrayToPermutation 
 *
 */
module.exports = function (arrayToPermutation) {
    // get the length of array
    let length = arrayToPermutation.length
    // get the last item
    let auxyliary = arrayToPermutation[length]
    // the auxyliary to store the item what change
    let auxyliary_2 
    // itereate over all array
    for (var i = 0; i < length; i++ ) {
        // store the value what changes
        auxyliary_2 = arrayToPermutation[i]
        // store the last item stored
        arrayToPermutation[i] = auxyliary
        // store in auxyliary value
        auxyliary = auxyliary_2
    }
}