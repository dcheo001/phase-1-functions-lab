// Code your solution in this file!
function distanceFromHqInBlocks(destination){
    return Math.abs(destination - 42)
//    let start = 42;  // start represents head quarters
//    if (destination > start){ // if the destination block is greater than start
//        return destination - start; // return distance from hq
//    }
//    if (destination < start){ // if the start is greater than destination
//        return start - destination // returns distance from hq
//   } 
}

function distanceFromHqInFeet(block){
    let totalBlocks = distanceFromHqInBlocks(block); // first lets determine the number of blocks
        return totalBlocks * 264; // then we can mulitiply it by 264
}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start) * 264
    } else
        return (start - destination) * 264
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
    
    } else if (distance > 400 && distance < 2001){
        return (distance - 400)* .02;
    
    }  else if (distanceTravelledInFeet(start, destination) > 2000 && distance < 2500) {
        return (25);
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return ('cannot travel that far');
    }
}

