function solution(nCols, nRows, col, row) {
    let rowsBehindMe = nRows - row;
    let colsToTheLeft = nCols - col + 1;
    return rowsBehindMe * colsToTheLeft;
}