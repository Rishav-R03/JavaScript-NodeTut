//{} global execution context - this
//this object has window in browsers
//functional execution context

/**
 * Execution phase
 * 1. Memory creation phase : memory allocations for codes written
 * 2. Execution Phase : executing code
 */

//example

let val1 = 10
let val2 = 5

const sum = (val1,val2)=>{
    return val1+val2
}
let result = sum(val1,val2)
console.log(result)

//memory phase
/**
 * val1 and val2 will be send to memory carrying undefined as default value
 * sum will be send to memory after defination 
 * result will be send to memory undefined as default value
 */

//execution phase
/**
 * val1 will get 10, val2 will get 5
 * while executing sum function we will create new variable environment + execution thread 
 * now for each time function will called it create new block(new variable env + execution thread) 
  and it will perform creation phase and execution phase

  returning the sum result will be done at global execution context;
    global execution context - gets deleted after execution.
 */

//call stack

/**
 * LiFO
 * function is removed after execution - popped
 * function is entered at stack
 * global execution context
 */

//use sources and snippets in browser