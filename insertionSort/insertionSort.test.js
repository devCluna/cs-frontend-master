const insertionSort = require('./insertionSort.js');

describe('insertionSort', () => {
    it('sorts an array of positive integers', () => {
        expect(insertionSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it('sorts an already sorted array', () => {
        expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('sorts a reverse sorted array', () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('handles an array with negative numbers', () => {
        expect(insertionSort([3, -2, -1, 5, 0])).toEqual([-2, -1, 0, 3, 5]);
    });

    it('handles an array with all equal elements', () => {
        expect(insertionSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });

    it('handles an empty array', () => {
        expect(insertionSort([])).toEqual([]);
    });

    it('handles an array with one element', () => {
        expect(insertionSort([42])).toEqual([42]);
    });
});