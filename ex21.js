function solution(n) {
    return 1 << n.toString(2).split('').reverse().join('').indexOf('0', n.toString(2).split('').reverse().join('').indexOf('0') + 1);
  }