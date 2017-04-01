function calcTax(income, state, dependents) {
    if (state === void 0) { state = 'NY'; }
    var deduction;
    if (dependents) {
        deduction = dependents * 500;
    }
    else {
        deduction = 0;
    }
    if (state == 'NY') {
        return income * 0.06 - deduction;
    }
    else if (state == 'NJ') {
        return income * 0.05 - deduction;
    }
}
var tax = calcTax(10000, 'NY', 3);
console.log("Your tax is " + tax);
var tax2 = calcTax(10000);
console.log("Your another tax is " + tax2);
var tax3_lambda = function () {
    var number = 150;
    return number * 4;
};
console.log("Tax 3 = " + tax3_lambda());
//# sourceMappingURL=taxCalc.js.map