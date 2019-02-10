
module.exports = {
    right: function (arrayToPermutation) {
        let length = arrayToPermutation.length
        let auxyliary
        if (length < 2) return arrayToPermutation

        if (length === 2) {
            auxyliary = arrayToPermutation[0]
            arrayToPermutation[0] = arrayToPermutation[1]
            arrayToPermutation[1] = auxyliary
            return arrayToPermutation
        }

        auxyliary = arrayToPermutation[length - 1]
        let auxyliaryLeft

        for (var i = 0; i < length; i++) {
            auxyliaryLeft = arrayToPermutation[i]
            arrayToPermutation[i] = auxyliary
            auxyliary = auxyliaryLeft
        }

        return arrayToPermutation
    },
    left: function (arrayToPermutation) {
        let length = arrayToPermutation.length
        let auxyliary

        if (length < 2) return arrayToPermutation

        if (length === 2) {
            auxyliary = arrayToPermutation[0]
            arrayToPermutation[0] = arrayToPermutation[1]
            arrayToPermutation[1] = auxyliary
            return arrayToPermutation
        }

        auxyliary = arrayToPermutation[0]
        let auxyliaryRigth

        for (var i = length - 1; i >= 0; i--) {
            auxyliaryRigth = arrayToPermutation[i]
            arrayToPermutation[i] = auxyliary
            auxyliary = auxyliaryRigth
        }

        return arrayToPermutation
    }
}