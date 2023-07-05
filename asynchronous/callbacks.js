function talk(statenment,callback){
    console.log(statenment);
    callback ();
    // a callback it tkes a function whthin a function.

};
function greet(){
    console.log("Hello there");

}
talk("I loved coronation",greet)