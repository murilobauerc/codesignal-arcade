function solution(min1, min2_10, min11, s) {
    let result = 0
    let durationFirstMinuteLast = s - min1
    if(s >= min1) {
        s -= min1
        result += 1
    }else{
        return result
    }
    
    for (let i = 2; i <= 10; i++) {
        if (s >= min2_10) {
            s -= min2_10; // Subtract the cost of each minute from the balance
            result += 1; // Increment the result for each minute you can afford
        } else {
            // If you can't afford the next minute, return the result
            return result;
        }
    }
    
    while (s >= min11) {
        s -= min11; // Subtract the cost of each minute from the balance
        result += 1; // Increment the result for each minute you can afford
    }

    return result; // Return the total minutes you can afford to talk
}
