function solution(n) {
    return parseInt([...n.toString(2).padStart(32, '0')].reduce((acc, bit, i, bits) => i % 2 === 0 ? acc + (bits[i + 1] || '0') + bit : acc, ''), 2);
}