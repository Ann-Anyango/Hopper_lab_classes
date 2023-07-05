
let succes=true;
let promise=new Promise((resolve ,reject)=>{
    // Apromise takes in a one aqunments and 


    if(succes){
        resolve("I have a job");
    }
    else{
        reject("I do not have a job")
    
    }
});
    


console.log()
promise.then(()=>{
    console.log("I will apply after threee monthes");
    // preventing an error 


})
promise.catch(()=>{
    console.log("I will apply again for tha three month");
    // handling erreos unhandle error rejects

})
promise.finall(()=>{
    console.log("I will make my family proud");
    // 
})