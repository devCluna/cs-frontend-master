const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
    it('should return 0 for n = 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('should return 1 for n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('should return 1 for n = 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('should return 2 for n = 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('should return 3 for n = 4', () => {
        expect(fibonacci(4)).toBe(3);
    });

    it('should return 5 for n = 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    it('should return 8 for n = 6', () => {
        expect(fibonacci(6)).toBe(8);
    });

    it('should return 21 for n = 8', () => {
        expect(fibonacci(8)).toBe(21);
    });

    it('should throw for negative numbers', () => {
        expect(() => fibonacci(-1)).toThrow();
    });

    it('should throw for non-integer input', () => {
        expect(() => fibonacci('a')).toThrow();
        expect(() => fibonacci(null)).toThrow();
        expect(() => fibonacci(undefined)).toThrow();
        expect(() => fibonacci(2.5)).toThrow();
    });
});