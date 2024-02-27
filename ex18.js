function solution(a) {
    let bitsArray = []
    let result = 0
    for(let i = 0; i < a.length; i++) {
        bitsArray.push(a[i].toString(2).padStart(8,'0'))
    }
    result = parseInt(bitsArray.reverse().join(''), 2)
    
    return result
}
