(function (global, factory) {
    // eslint-disable-next-line no-nested-ternary,no-unused-expressions
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
        // eslint-disable-next-line no-undef
        : typeof define === 'function' && define.amd ? define(factory)
            // eslint-disable-next-line no-param-reassign,no-restricted-globals
            : (global = global || self, global.isValid = factory());
}(this, () => {
    const REGX = {
        AADHAR: /^[2-9]\d{11}$/,
    };
    const d = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
        [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
        [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
        [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
        [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
        [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    ];
    const p = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
    ];
    const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
    function invArray (arr) {
        let array = arr;
        if (Object.prototype.toString.call(array) === '[object Number]') array = String(array);
        if (Object.prototype.toString.call(array) === '[object String]') array = array.split('').map(Number);
        return array.reverse();
    }
    const generate = number => inv[invArray(number).reduce((a, c, i) => d[a][p[(i + 1) % 8][c]], 0)];
    const aadhar = (number) => {
        if (REGX.AADHAR.test(number.toString())) {
            return !invArray(number).reduce((a, c, i) => d[a][p[i % 8][c]], 0);
        }
        return false;
    };
    aadhar.getValidDigit = generate;
    const isValid = {
        aadhar
    };

    return isValid;
}));
