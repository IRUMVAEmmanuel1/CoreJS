for (var year = 2023; year<2025;year++){
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

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

for (var a =1; a<=10; a++){
    if(a==1){
        console.log("Blonze")
    }
    else if(a==2)
    console.log
}