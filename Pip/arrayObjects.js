let poeple=[
    
    {name :"Ann",age:20,height:"3ft"},
    {name :"Hendry",age:30,height:"7ft"},
    {name :"Susan",age:240,height:"6ft"},

];
let ages=poeple.map(items=>items.age);
console.log({ages});
let weights=poeple.map(item=>{
    return{
        ...item,
        weights:50,
    }
    
})
    console.log({weights});
let changeWeight=weights.map(item=>{
    if (item.name==="Ann"&&"Susan"){
        item.weights=60;
    }
    return item
})  
console.log({changeWeight});  