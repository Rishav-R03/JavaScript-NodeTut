const coding = ["js","cpp","py","java"];
coding.forEach((item)=>{
    console.log(item);
})

const myNums = [1,2,3,4,5,6,7,8,9,10];

const tenAdd = [];
myNums.forEach((item)=>{
    tenAdd.push(item+10);
})

const updated = myNums.map((item) => item*10);
console.log(updated);
console.log(tenAdd);

const newNums = myNums.filter((item)=>item>4);
// const newNums1 = myNums.filter((item)=>{return item>4});
//using scope {} requires return keyword.
console.log(newNums);
// console.log(newNums1);

//foreach
const myTab = [2,4,6,8,10,12,14,16,18,20];
const newTab = [];

myTab.forEach((item)=>{
    if(item>15){
        newTab.push(item);
    }
})
console.log(newTab)