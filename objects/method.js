let student= {
    name:"Caroline",
    age: 15,
    introduction:function(){
        console.log("Hello");
        console.log( )
    }
}
student.introduction();
student.hobby=function(){
    console.log("I love dancing");
}
console.log({student});
student.hobby();

student.hobby=function(){
    console.log();
}
