
    console.log(year)
    for(var month = 6; month<9; month++){
        console.log("------------------",month)
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
       
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}