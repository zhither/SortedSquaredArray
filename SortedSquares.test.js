const SortedSquares = require('./SortedSquares');

describe("takes a non-empty array of integers and sorted in ascending order", () => {
    test('[] should result in "-1"', () => {
        expect(SortedSquares([])).toBe(-1);
    });

    test('[1,2,5] should result in "[1,4,25]"', () => {
        expect(SortedSquares([1,2,5])).toStrictEqual([1,4,25]);
    });

    test('["prueba","a","ohh"] should result in "-1"', () => {
        expect(SortedSquares(["prueba","a","ohh"])).toBe(-1);
    });
});