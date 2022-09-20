// Code your solution in this file!



function distanceFromHqInBlocks(pickUp) {
    
if (pickUp > 42){

    return pickUp - 42;
} else {
    return 42 - pickUp;
}

};

function distanceFromHqInFeet(blockNumber) {

    let remainingBlocks = distanceFromHqInBlocks (blockNumber);
        return remainingBlocks * 264; 

    }

function distanceTravelledInFeet(start, destination) {
    let distanceCovered = Math.abs(start - destination) *264;
    return distanceCovered;
}


function calculatesFarePrice (start,end) {
    const distanceInFeet = Math.abs(start - end) * 264
    if (distanceInFeet <= 400) return 0
    else if (distanceInFeet > 2500) return "cannot travel that far"
    else if (distanceInFeet < 2000) return (distanceInFeet - 400) * .02
    else return 25
}