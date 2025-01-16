const fs = require("fs");

// Synchronous write
fs.writeFileSync("test.txt", "Hey There!");
//sync is a blocking statement
//async is non-blocking
// Asynchronous write
fs.writeFile("test.txt", "Hey Async!", (err) => {
    if (err) throw err;
});

// Asynchronous read
fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Synchronous read
const res = fs.readFileSync("test.txt", "utf-8");
console.log(res);

// Append date with correct toLocaleString() call
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
console.log(fs.readFileSync("test.txt", "utf-8")); // Read again to see the appended date
