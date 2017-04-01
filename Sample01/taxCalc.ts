function calcTax(income: number, state: string = 'NY', dependents?: number):
number{
  var deduction: number;

  if(dependents){
    deduction = dependents*500;
  } else {
    deduction = 0;
  }

  if(state=='NY'){
    return income*0.06 - deduction;
  } else if (state=='NJ'){
    return income*0.05 - deduction;
  }
}

var tax: number = calcTax(10000,'NY' , 3);
console.log("Your tax is " + tax);

var tax2 = calcTax(10000);
console.log("Your another tax is " + tax2);
