function solution(n) {
    stringNumber = n.toString()    
    for(let i = 0; i < stringNumber; i++) {
        if(stringNumber[stringNumber.length - 1 - i] == '0') continue;
        if(stringNumber[stringNumber.length - 2 - i] == undefined) return false;
        else if(stringNumber[stringNumber.length - 2 - i] == '0') {
            return true
            // let temp = stringNumber[stringNumber.length - 1 - i]
            // stringNumber[stringNumber.length - 2 - i] = temp
            // temp = stringNumber[stringNumber.length - 1 - i]
        } 
    }
    return false
}