function testNum(number) {
    return new Promise(function(resolve, reject) {
        if(number > 50){
            resolve(number + " is greater than 50.")
        } else if(number <= 50) {
            resolve(number + " is less than or equal to 50.")
        } else {
            reject("Hello Danger, my old friend.")
        }
    });
};

testNum(70).then((results)=>{
    console.log(results);
}).catch((err)=>{
    console.error(err);
});
testNum(50).then((results)=>{
    console.log(results);
}).catch((err)=>{
    console.error(err);
});
testNum('apple').then((results)=>{
    console.log(results);
}).catch((err)=>{
    console.error(err);
});