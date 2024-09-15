//for of

let arr = [1,2,3,4,5,6,7,8,9,10]
for (const element of arr) {
    // console.log(element)
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(greet);
}

// maps

const map = new Map();
map.set('IN',"India")
map.set('IND',"Indonesia")
map.set('ISL',"Israel")

console.log(map);

//looping 

for (const [key,value] of map) {  //using square brackets destructures the map key and value pair
    // console.log(key,':-',value);
}

//object

const myObject = {
    game1:"Cricket 07",
    game2:"Football",
    game3:"Hockey"
}

// for (const game of myObject) {
//     console.log(game);
// } 
//object is not iterable

const languages = {
    js:'JavaScript',
    cpp:'C++',
    py:'Python',
    java:'Java'
}

for (const language in languages) {
    //  console.log(language);
    //  console.log(`${language} shortcut is for ${languages[language]}`);
}
//we made objects instead of arrays because arrays are having keys starting from 0 and is numerical in value.

//maps are not iterable using for in loops but we can use for of.
const programming = ["js","cpp","py","java"];
for (const key in programming) {
   console.log(key);
}

//for each
const numbers = ["cpp","jsq","py","java"];
numbers.forEach(function (num){
    console.log(num);
})
numbers.forEach((num)=>{
    console.log(num);
})
 
function printMe(num){
    console.log(num);      
}

numbers.forEach(printMe)

numbers.forEach((item ,index,arr)=>{
    console.log(item ,index,arr);
})

const myCoding = [
    {
        languageName: "javasript",
        languageShortcut: "js"
    },
    {
        languageName: "python",
        languageShortcut: "py"
    },
    {
        languageName: "c++",
        languageShortcut: "cpp"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageShortcut +" "+item.languageName);
})