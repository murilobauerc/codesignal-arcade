function solution(n, l, r) {
    let find = 0;
    for (let A = l; A <= r; A++) {
        let B = n - A;
        if (B >= A && B <= r) {
            find++;
        }
    }
    return find;
}