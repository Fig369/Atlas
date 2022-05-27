var readline = require('readline');
var r1 = readline.createInterface(
    process.stdin, process.stdout)

r1.setPrompt("what is your height?")
r1.prompt()
r1.on("line", (height) => {
    console.log(`Height recieved by the user: ${height}`)
    r1.close
})
