var count = 63

function checkProbabilityTheory(count) {
    let rnd;
    let oddpercent = 0;
    let evenpercent = 0;
for (var i = 0; i < count; i++) {
    do {
        rnd = Math.random();
        rnd *= 1000;
        rnd = Math.round(rnd);
    } while (rnd < 100 || rnd > 1000)
    if (rnd%2 == 0){
        evenpercent++;
        }
        else{
        oddpercent++;
        }
}

    console.log ("total:", i)
    console.log ("evens:", evenpercent)
    console.log ("odds:", oddpercent)
    console.log ("even:odd -", (evenpercent*100/i).toFixed(1) + "% :", (oddpercent*100/i).toFixed(1) + "%")
}
checkProbabilityTheory(count)
