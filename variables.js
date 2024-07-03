/**
 * Prefer not to use var because of issue in block scope and functional scope.
 * 
 */
let fName = "Rishav"


let lName = "Raj"
const accountNo = 500434565544
const mobNo = 9311571439

console.table([fName,lName,accountNo,mobNo])

let person = { // javascript object with attributes
        name :"Rishav",
        age : 21
}

let arr = [1,2,3]

arr[2] = "new"

console.log(arr)
