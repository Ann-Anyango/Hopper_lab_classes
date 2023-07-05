// we use []array litral squarevbrackets (creats arrays all of them)
let num=[24,true,"hello",38];
let num2=new Array(24,true,"hello",38);
console.log(num);
console.log(num2);
num.push("fruits");
// push adds element at the end 
console.log(num);
num.unshift(3);
// it removes at the start 
console.log(num);
num.pop();
console.log(num);
// it adds at an index point 
num.shift();
console.log(num);
// at 
//1. given an array of numbers x return an array even  where items in x is mutliplied by 5
// a.result:declay array x
// b.loop through arrays x
// c.multipevey evey item  by 5[]
let x=[8,5,7,9,2,1,5];
let even =x.map(function(items){
      return items*5
}) 
// when using forEach it does not difine(output/undefine)it does not collect as map
console.log(even);

let result=[];
x.forEach(function(item){
     result.push(item*5) ;


})
console.log(result);
//  concat(the )
let newArray=num.concat(x);
console.log(newArray);
// spread operetor(...)

let tests=["Angela",...x, ...num];
console.log(tests);
// it takes the numbers declaied at the 
let [a,b, ...c]=x;
console.log({a});
console.log({b});
console.log({c});
function divideArray(num){
if (num.length<=1){
      return  num;
}
let middle =Math.floor((num.length)/2);
let left=num.slice(0,middle);
let right =num.slice(middle);
return sortedArrays( divideArray(left),divideArray(right));

}
function sortedArrays(left,right){
      let empty=[] ;
      while (left.length && right.length){
            if (left[0]<right[0]){
                  empty.push(left.shift());

            }
            else{
                  empty.push(right.shift());
            }
      }
      return[...empty,...left,...right]
}
let num1 =[10,2,56,3,8,4,11];
let newsorted=divideArray(num1)


let target=10;
function binary_search (arr,target){
 let left_start=0
 let end= arr.length-1
 while(left_start<=end ){
 let middle_1=Math.floor((left_start+end)/2)
  if(arr[middle_1===target]){
      return middle_1
  }
  else if( arr[middle_1]<target){
      left_start=middle_1+1
  }
  else{
      end=middle_1-1
  }
 }
 return left_start-1


}
console.log(binary_search(newsorted,target))