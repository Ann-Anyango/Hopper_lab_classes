function divideArray(num){
    if (num.length<=1){
          return  num;
    }
    let middle =Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right =num.slice(middle);
    return sortedArrays( divideArray(left),divideArray(right));
    
    }
    function sortedArrays(left,right){
          let emptyArry=[] ;
          while (left.length&&right.length){
                if (left[0]<right[0]){
                      emptyArry.push(left.shift());
    
                }
                else{
                      emptyArry.push(right.shift());
                }
          }
          return[...emptyArry,...left,...right]
    }
    let num =[10,2,56,3,8,4,11];
    console.log(divideArray(num))
//     margin sorting
function divideArray(arr){
      if (arr.length<=1){
            return arr    
      }
      let middle=Math.floor(arr.length/2);
      let left= arr.slice(0,middle);
      let right=arr.slice(middle);  
      return sortedArrays(divideArray(left),divideArray(right))   
      
}
function sortedArrays(left,right){
      let newEmtyArray=[]
      while(left.length&& right.length){
      if(left[0]< right[0]){
            newEmtyArray.push (left.shift())
      }else{
            newEmtyArray.push(left.shift())
      }

      // push add the last element to the end
      // shift it removes the element at the 
}
return[...newEmtyArray,...left,...right]
}
let arry=[1,2,3,4]


function division(arry){
      if (arr.length<=1){

      }
      return arry

}
let middle=math.arry(aryr.length/2);
let left = arry.slice(0,middle);
let right= arry.slice(middle)
return sortedArrays(division(left),division(right));{
      
}