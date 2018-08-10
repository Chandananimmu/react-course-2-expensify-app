



const promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({
      name:"andrew",
      age:26
    })
    //reject("something went wrong");
  },1500)
});
console.log("before");
promise.then((data)=>{
  console.log('1',data);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("this is  frm another promise");
  },5000);
});
}).then((str)=>{
  console.log('2',str);
}).catch((error)=>{
  console.log('error:',error);
});

console.log("after");