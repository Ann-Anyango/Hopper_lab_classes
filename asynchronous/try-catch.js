let success=true;
const performTask=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{success? resolve()})
    })
}