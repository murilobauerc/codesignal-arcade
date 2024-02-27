function solution(n, k) {
    return parseInt([...n.toString(2)].reverse().map((bit, index) => index === k - 1 ? '0' : bit).reverse().join(''), 2);
  }