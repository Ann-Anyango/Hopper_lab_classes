let a=20;
// globle variables
function add(b){
    // if add another variale it will ony takes the second call it returns the {a}
    a=30
    console.log(a+b);
    // local  variable cannot be access outside the function it is only acess incide the functoin parentises
    let fruit="Apple";
    console.log(fruit);
}
add(50);
console.log({a})

 function greet(){
    let hello="hi";
    function talk(){
        let c = "hello there";
        console.log(`${hello} ${c}`);
    }
    talk();
 }
 greet();
//  fuction expression
