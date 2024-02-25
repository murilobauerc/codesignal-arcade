function solution(n, firstNumber) {
    if (n / 2 <= firstNumber) {
        return firstNumber - n / 2;
    }
    return n / 2 + firstNumber;
}
