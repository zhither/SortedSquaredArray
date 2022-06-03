const SortedSquares = require('./SortedSquares');

describe("takes a non-empty array of integers and sorted in ascending order", () => {
    test('[] should result in "-1"', () => {
        expect(SortedSquares([])).toBe(-1);
    });

    test('[1,2,5] should result in "[1,4,25]"', () => {
        expect(SortedSquares([1,2,5])).toStrictEqual([1,4,25]);
    });

    test('test case 1', () => {
        expect(SortedSquares([1, 2, 3, 5, 6, 8, 9])).toStrictEqual([1, 4, 9, 25, 36, 64, 81]);
    });

    test('test case 2', () => {
        expect(SortedSquares([-2, -1])).toStrictEqual([1, 4]);
    });

    test('test 3', () => {
        expect(SortedSquares([-10, -5, 0, 5, 10])).toStrictEqual([0, 25, 25, 100, 100]);
    });
});