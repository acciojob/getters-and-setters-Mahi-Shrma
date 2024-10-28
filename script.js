//complete this code
class Person {
	constructor(name,age){
		this.name=name
		this.age=age
	};
	get(name){
		return this.name;
	}
	set(age){
	    this.age=age;
	}
}

class Student extends Person {
	study(){
	console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
    teach(){
	console.log(`${this.name} is teaching`)
	}
}
const student = new Student("John", 25);
student.study();
const teacher = new Teacher("John", 25);
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
