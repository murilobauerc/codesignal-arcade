function solution(n, m) {
    let largestDivisor = 0;
    for (let i = 1; i <= m; i++) {
        if (i % n === 0) {
            largestDivisor = i;
        }
    }
    
    return largestDivisor;
}
