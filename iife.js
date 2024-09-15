//Immediately Invoked Function Expression
(function () {
    console.log("DB Connected");
})();
//we need to end a iife with a semicolon to avoid error while using multiple iife functions,.
//global scope k pollution se problem hoti hai so to avoid this we use immediately invoked function expression

(()=>{
    console.log("Connected without function keyword");
})();

((name)=>{
    console.log("Connected with parameter ");
})