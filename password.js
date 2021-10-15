const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question ("Oh, Hello Dave. Please enter your password:", function(answer){
    if (answer < 10) {
        console.log ("I'm sorry Dave, I can't let you do that.")
    } else {
        console.log ("Access Granted, You are looking well today")
    }
})