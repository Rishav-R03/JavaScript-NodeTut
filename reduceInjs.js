const myNums = [1,2,3,4,5,6,7,8,9,10];
const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} currval:${currval}`);
    return acc+currval
},0);

const myTotal1 = myNums.reduce((acc,currval)=>acc+currval,0);
console.log(myTotal);
console.log(myTotal1);