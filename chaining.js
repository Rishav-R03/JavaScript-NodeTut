const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.map((item)=>(item+10)).map((item)=>item*10);
const newNumsFiltered = myNums.map((item)=>(item+10)).map((item)=>item*10).filter((item)=>item%8==0);
console.log(newNums)
console.log(newNumsFiltered)