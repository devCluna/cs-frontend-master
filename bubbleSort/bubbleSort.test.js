const bubbleSort = require('./bubbleSort');

describe('Bubble Sort', () => {
    test('sorts an array of positive integers', () => {
        expect(bubbleSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    test('sorts an already sorted array', () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('sorts an array with negative numbers', () => {
        expect(bubbleSort([3, -2, -1, 0, 2, 1])).toEqual([-2, -1, 0, 1, 2, 3]);
    });

    test('sorts an array with duplicate values', () => {
        expect(bubbleSort([4, 2, 2, 4, 1])).toEqual([1, 2, 2, 4, 4]);
    });

    test('sorts an array with a single element', () => {
        expect(bubbleSort([42])).toEqual([42]);
    });

    test('sorts an empty array', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test('sorts an array with all identical elements', () => {
        expect(bubbleSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
});
