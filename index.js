const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(reducer, item) {
    let accumulator  = item
    for (const element of accumulator) {
        accumulator = reducer(accumulator, element)
    }
    return accumulator
} 

let totalBatteries = reducer(batteryBatches,0)