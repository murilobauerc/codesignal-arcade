function solution(n) {
    let fact = 1

    for(let i = 1; fact < n; i++) {
        fact *= i
    }
    return fact
}
