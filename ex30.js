function solution(k) {
    let redApples = 0
    let yellowApples = 0
    for(let i = 1; i <= k; i++) {
        size = i * i
        if(size % 2 == 0) {
            redApples += size
        }else{
            yellowApples += size
        }
    }
    return redApples - yellowApples    
}
     