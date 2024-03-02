function solution(commands) {
    let count = 0;
    let orientation = 0; // Use to track the orientation changes: 0 - same direction, 2 - opposite direction

    // Iterate through each command
    for (const command of commands) {
        if (command === 'L' || command === 'R') {
            orientation = (orientation + 1) % 2;
        } else if (command === 'A') {
            orientation = (orientation + 2) % 2;
        }
        if (orientation === 0) {
            count++;
        }
    }

    return count;
}