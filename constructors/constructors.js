function Person (name,age){
    this .name=name;
    this.age=age;
}
// It startes with a capital letters
let person=new Person("Ann",25);
console.log({person});
console.log(person.age);

person.height="3Ft";
console.log({person})

let student=new Person("Henry",19);
console.log({student});
console.log(Person.prototype);
Person.prototype.gender="Male";
console.log(Person.prototype);

let person2=new Person("Jane",20);
console.log({person2})
console.log(person2.gender);
console.log(person.gender);
console.log(student.gender);
console.log(Person)

 