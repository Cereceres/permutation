'use strict'
/**
 * @function
 * @param {array} - arrayToPermutation 
 *
 */
module.exports = {
    right: function (arrayToPermutation) {
        // get the length of array
        let length = arrayToPermutation.length
        let auxyliary
        // if the length is less that two
        if(length < 2) return arrayToPermutation
        // if length is equal a two
        if(length === 2){
            auxyliary = arrayToPermutation[0]
            arrayToPermutation[0] = arrayToPermutation[1]
            arrayToPermutation[1] = auxyliary
            return arrayToPermutation
        }
        // get the last item
        auxyliary = arrayToPermutation[length - 1]
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
        return arrayToPermutation
    },
    left: function (arrayToPermutation) {
        // get the length of array
        let length = arrayToPermutation.length
        let auxyliary
        if(length < 2) return arrayToPermutation
        // if the length is two
        if(length === 2){
            auxyliary = arrayToPermutation[0]
            arrayToPermutation[0] = arrayToPermutation[1]
            arrayToPermutation[1] = auxyliary
            return arrayToPermutation
        }
        // get the last item
        auxyliary = arrayToPermutation[0]
        // the auxyliary to store the item what change
        let auxyliary_2 
        // itereate over all array
        for (var i = length - 1; i >= 0 ; i-- ) {
           // console.log('auxyliary_2',i,auxyliary_2,auxyliary,arrayToPermutation[i])
            // store the value what changes
            auxyliary_2 = arrayToPermutation[i]
            // store the last item stored
            arrayToPermutation[i] = auxyliary
            // store in auxyliary value
            auxyliary = auxyliary_2
        }
        return arrayToPermutation
    }
}