//array
//js arrays are resizable and can contain any data type such as string, number, boolean, object.
//copying array creates shallow copies that means they are sharing same reference in memory. Change in one is visible to another.
//deep copies that are not sharing same reference, change in one does not affect original array.
const myArr = ["first index",1,2,3,4,5, "array",false];
console.log(myArr[0]);
const mylength = myArr.length;
console.log(mylength);


//array methods

myArr.push("last index");
console.log(myArr);
console.log(mylength);
myArr.pop();

