// node js is asynchronus it means it doesn't wait to load the data and depend on that.

console.log("First Execute..");

setTimeout(() => {
    console.log("Third Execute....");
}, 2000);

console.log("Second Execute...");


// Its drawback : lets see
let a = 20;
let b = 0;
setTimeout(() => {
    b = 10;
}, 2000);
console.log(a+b);

// Now how to handle these things :
let c = 20;
let d = 0;
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(10);
    }, 2000);
})

waitingData.then((data)=>{
    b = data
    console.log(c+b);
})