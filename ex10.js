function solution(value1, weight1, value2, weight2, maxW) {
    if(weight1 + weight2 <= maxW) {
      return value1 + value2  
    } else if(weight1 <= maxW && weight2 <= maxW) {
        return Math.max(value1, value2);
    } else if (weight1 <= maxW) {
        // If only the first item can be carried, take the first item
        return value1;
    } else if (weight2 <= maxW) {
        // If only the second item can be carried, take the second item
        return value2;
    } else {
        // If neither item can be carried, take nothing
        return 0;
    }
}
