class Person{
    constructor(name,age){
        this.name=name
        this.age=age
        this .race="Black"
    }
    greet(){
        console.log("Hello");
    }
};
let person=new Person("jane",50);
console.log(person);
person.greet();
// inheritance
 class Student extends Person{
    constructor(name,age){
    super(name,age)
    }
 }
 let student=new Student("Henry",45);
 console.log ({student});

Student.prototype.height="6ft";
console.log(student.height);
class Sister extends Person{
    constructor(name,age){
        super (name,age);
        this .name=name;
        this.age=age;
        this .race="white"
    }
}
let sister =new Sister("Joy",20);
console.log(sister);