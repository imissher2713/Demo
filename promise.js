// Sync
// Async
let promise = new Promise(function(resolve, reject){
    reject(33)
})
promise.then((a) => {
    console.log(a);
})
