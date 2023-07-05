let num=[3,6,8,257,5,7,7];
console.log(num.lenght);
// map turns the arrays
// for each it gives out an diferend 
let multiple=num.map(item=>item*2);
console.log({multiple});
// gives a single
let triples=num.forEach(item=>item*2);
console.log({multiple});
// when you want when the using map amd for each to work the same
// using a condition thatpases the input and eeturns the an array
let less=num.filter(item=>item<10);
console.log(less);
// when you find the first element
let getSeven=num.find(item=> item===7);
console.log({getSeven});

function arrList(arr){
    let i=0;
    while (i<arr.length){  
    if (i===4){
        // i++;
        break;
    }
      console.log(arr[i]);
      i++;
     
    }
    
}
let arr=[1,2,3,4,6,5,3];
console.log(arrList(arr));
function number(num){

}
let poeple=[{"name:"}]