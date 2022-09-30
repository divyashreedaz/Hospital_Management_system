const s=new Promise((resolve,reject)=>{
    let a=0;
    if(a==2){
        resolve("success")
    }else{
        reject("failure")
    }
})

s.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
