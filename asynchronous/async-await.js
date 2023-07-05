function greet(){
    console.log("Welcome to our site");

};
greet()
let data=[{}];
let createUser =new Promise((resolve,reject)=>{
if(data){
     setTimeout(()=>(resolve("User succesfuly created")),5000)
}
else{
     setTimeout(()=>(reject ("User alredy existes")),5000);
    
}
});
 async function creatUserAccount(){
    let response = await createUser;
    console.log({response});
 }
 creatUserAccount();