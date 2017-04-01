var Person = (function () {
    function Person(firstName, lastName, age, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
    }
    return Person;
}());
var p = new Person();
p.firstName = "Hatoriz";
p.lastName = "Hanso";
p.age = 36;
p.ssn = "37201002";
console.log("1st Person info. are : " + p.firstName);
var p2 = new Person("Ath", "Kwan", 23, "12345");
console.log(p2.firstName + " " + p2.lastName);
//# sourceMappingURL=personClass.js.map