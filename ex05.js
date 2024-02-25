function solution(divisor, bound) {
    let largestInteger = 0;
    for (let i = 0; i <= bound; i++) {
        if (i % divisor === 0) {
            largestInteger = i;
        }
    }
    return largestInteger;
}
