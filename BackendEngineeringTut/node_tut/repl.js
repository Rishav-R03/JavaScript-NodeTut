//repl

/**
 * Read
 * Evaluates
 * Print
 * Loop
 */

const repl = require("repl")
const local = repl.start("Started\n")

local.on('exit',()=>{
    console.log("Bye");
    process.exit(0);
})


