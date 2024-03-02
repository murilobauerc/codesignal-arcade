function solution(param1, param2) {
    let digitsParam1 = param1.toString()
    let digitsParam2 = param2.toString()
    let maxLength = Math.max(digitsParam1.length, digitsParam2.length);
    let columnSum = 0
    let finalResult = []
    for(let i = 0; i < maxLength; i++) {
        let digit1 = i < digitsParam1.length ? parseInt(digitsParam1[digitsParam1.length - 1 - i]) : 0;
        let digit2 = i < digitsParam2.length ? parseInt(digitsParam2[digitsParam2.length - 1 - i]) : 0;
        columnSum = digit1 + digit2

        if(columnSum >= 10) {
            finalResult.push(columnSum % 10)
        }else{
            finalResult.push(columnSum)
        }
        
    }
    result = parseInt(finalResult.reverse().join(''))
    return result
}