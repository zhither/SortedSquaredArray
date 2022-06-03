const SortedSquares = (array) => {
    const filteredArray = array.filter(element => typeof element === 'number')
    if (filteredArray.length > 0) {
        return filteredArray.map((element) => {
                return element * element
            }).sort((a, b) => {
                return a - b
            })
    } else {
        return -1
    }
};

module.exports = SortedSquares;