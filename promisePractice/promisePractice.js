const myFunction = () => {

  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('5 second delay')
    }, 5000);

  })


}

(async ()=>{
  await myFunction();
})()