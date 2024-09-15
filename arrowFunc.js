const user = {
    userName :"rishav",
    price : 5000,
    welcome: function(){
        console.log(`welcome ${this.userName}`); //this keyword refers to current object or current scope/context
        console.log(this);
    }
}
//browser k andar global scope hai window object hai
user.welcome();

user.userName = "shubham"; //context change
user.welcome();
// console.log(this);
//this works only for objects and not on functions it will show undefined.

function chai(){
    console.log(this);
}

// chai();

const tea = ()=>{
    let userName = "Raj";
    console.log(this);
    console.log(this.userName);
}

tea();
//explicit return
const addTwo = (num1,num2)=>{
    return num1+num2;
}

console.log(addTwo(2,3));

//implicit return 

const addThree = (num1,num2,num3)=> (num1+num2+num3);

//to return object we need to use parenthesis

const addNum = (num1,num2)=> ({userName:"Rishav",num2});

const myArray = [1,2,3,4,5,6,7,8,9,10];
myArray.forEach((num)=> console.log(num));