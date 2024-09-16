const myNums = [1,2,3,4,5,6,7,8,9,10];
const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} currval:${currval}`);
    return acc+currval
},0);

const myTotal1 = myNums.reduce((acc,currval)=>acc+currval,0); // 0 is the initial value of sum 
console.log(myTotal);
console.log(myTotal1);

const shoppingCart = [
    {
        name:"Monitor",
        price:35000
    },
    {
        name:"Mouse",
        price:1000
    },
    {
        name:"Keyboard",
        price:1500
    },
    {
        name:"CPU",
        price:350000
    },
];

const shoppingTotal = shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(shoppingTotal);