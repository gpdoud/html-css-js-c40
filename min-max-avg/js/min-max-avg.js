/**
 *  Min, Max, Average
 * 
 *  Write a program to calculate and output the 
 * min, max, and average of this array of numbers
 */ 

const nbrs = [96, 59, 4, 68, 58, 48, 17, 76, 32, 71, 
                11, 6, 3, 32, 85, 13, 60, 1, 27, 15, 
                96, 31, 75, 5, 2];

// declare variables
{
    let min = 100;
    let max = 0;
    let sum = 0;
}

// calculate
{
    for(let n of nbrs) {
        sum += n; // for the average
        if(n < min) min = n;
        if(n > max) max = n;
    }
}

// output results
{
    console.log("Min is", min);
    console.log("Max is", max);
    console.log("Avg is", 1.0 * sum / nbrs.length);
}