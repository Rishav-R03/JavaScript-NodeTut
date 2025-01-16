const fs = require('fs')
const os = require('os')
// console.log(1);
const res = fs.readFileSync('test.txt', 'utf-8') //blocking
// console.log(res)

const res2 = fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) throw err
    // console.log(data)
})
// console.log(2);

// default thread pool size is 4 
// rest it depends on number of cores

console.log(os.cpus().length) ;

