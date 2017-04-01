class Person {
    firstName: string;
    lastName: string;
    age: number;
    ssn: string;

    constructor(firstName: string, lastName: string,
        age: number, ssn: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
    }

}

var p = new Person();

p.firstName = "Hatoriz";
p.lastName = "Hanso";
p.age = 36;
p.ssn = "37201002";

console.log("1st Person info. are : " + p.firstName);

var p2 = new Person("Ath", "Kwan", 23, "12345");
console.log(p2.firstName + " " + p2.lastName);

class Employee extends Person {
    department: string;

    constructor(firstName: string, lastName: string, age: number,
        ssn: string, department: string) {
        this.department = department;
    }
}
