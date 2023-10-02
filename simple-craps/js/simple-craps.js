console.log("Ready...");

const loaded = () => {
    play();
}

const roll_dice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1);
    let die2 = Math.floor(Math.random() * 6 + 1);
    return die1 + die2;
}


const play = () => {
    let rolls = [""];
    let point = roll_dice();
    if(point === 7) {
        console.log("You win on first roll!")
        return;
    } else if (point === 2 || point === 3 || point === 12) {
        console.log("You lost on the first roll of ${}")
    }
    console.log("Point is", point);
    let roll = roll_dice();
    rolls.push(roll);
    while(true) {
        if(roll === 7) {
            console.log(rolls.join(","), ": You lost...");
            return
        } else if(roll === point) {
            console.log(rolls.join(","), ": You win!");
            return;
        }    
        roll = roll_dice();
        rolls.push(roll);
    }    
}  


