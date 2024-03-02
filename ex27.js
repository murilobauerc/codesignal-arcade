function solution(a, b, n) {
    let sum = 0 
    for(let i = 0; i < n; i++) {
        sum += a * b
        a++
        b++
    }
    return sum
}
