var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, ssn, department) {
        var _this = this;
        _this.department = department;
        return _this;
    }
    return Employee;
}(Person));
//# sourceMappingURL=personClass.js.map