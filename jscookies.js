console.log(document.cookie);
document.cookie = "name = Rishav";
console.log(document.cookie);

let key = prompt("Enter your key");
let value = prompt("Enter your value");

document.cookie = `${key} = ${value}`
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}` // {key} = ${value}`
console.log(document.cookie)

// cookies are stored in the form key=value
//cookies are small strings in the form key=value