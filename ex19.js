function solution(a, b) {
    let count = 0;
    while(a <= b) {
        // Convert the number to its binary representation and count the '1's directly
        count += [...a.toString(2)].filter(bit => bit === '1').length;
        a++;
    }
    return count;
}