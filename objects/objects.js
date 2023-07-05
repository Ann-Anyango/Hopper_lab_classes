let person={
    name:"Ann",
    age:21,
    height:"5ft3inch",
    friend:{
        name:"Amanda",
        age:25,
    }
}
let students=new Object();
// console.log({students});
students.name="Mary"
// adding a property
console.log(person.age);
console.log(person["name"]);
console.log(person.friend.name)
console.log(person["friend"]["age"])
console.log({students})

person.age=27;
person.school='AkiraChix';
console.log({person});
// cloning an object repeting the same properties .
let person2=Object.assign(person);
console.log({person2});
// it prints out the key in the array 
let key=Object.keys(person);
console.log({key});
let values=Object.values(person);
console.log({values});
