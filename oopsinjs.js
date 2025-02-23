/**
 * Object Oriented Programming
 * Objects
 *    - collection of properties and methods
 *    - toLowerCase()
 * Parts of OOPS
 *    - class
 *    - instances
 *    - prototypes
 *    - constructor
 * Pillars
 *    - Encapsulation
 *    - Abstraction
 *    - Inheritance
 *    - Polymorphism
 *    
 * 
 */

//object literal
const user = {
    userName : "rishav",
    loginCount : 23,
    //method
    welcome : function (){
        console.log(`welcome ${this.userName}`);
    },       
    getuserDetails: function (){
        console.log(`Data generated by data base`)
    }   
}

// console.log(user)
user.welcome()

// console.log(this)

//to avoid repeating and multiple writings
//constructors are used

// const promiseOne = new Promise()
const date = new Date() // new keyword is used o create a new context

function User(userName,loginCount,isLoggedIn)  { // a constructor function 
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}
// constructor function gives us new a context

const userOne = new User("rishav",2,true) // new keyword is used o create a new context
const userTwo = new User("shubham",3,false)
const userThree = new User("raj",4,true)

// console.log(userOne)
// console.log(userTwo)
console.log(userThree.constructor)
//instanceof

