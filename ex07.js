function solution(n) {
    let acc = 0;
    let hours = Math.floor(n / 60).toString();
    let minutes = (n % 60).toString();
    
    for (let digit of hours + minutes) {
        acc += parseInt(digit);
    }
    return acc;
}
