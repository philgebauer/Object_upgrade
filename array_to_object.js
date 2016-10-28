
var atticus = new NewPerson("Atticus", "2405", "47000", 3);
var jem = new NewPerson("Jem", "62347", "63500", 4);
var boo = new NewPerson("Boo", "11435", "54000", 3);
var scout = new NewPerson("Scout", "6243", "74750", 5);
var robert = new NewPerson ("Robert", "26835", "66000", 1);
var mayella = new NewPerson ("Mayella", "89068", "35000", 2);

var employees = [];

function NewPerson (employeeName,employeeNumber,annualSalary,employeePerformance) {
    this.employeeName = employeeName;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.employeePerformance = employeePerformance;
}

employees.push(atticus, jem, boo, scout, robert, mayella);
// person.push(atticus, jem, boo, scout, robert, mayella);

console.log(employees);

employees.forEach(function(employee){
  console.log(bonusArrayBuilder(employee));
});


function bonusArrayBuilder(employee){
  var employeeName = employee.employeeName;
  var employeeNumber = employee.employeeNumber;
  var employeeSalary = employee.annualSalary;
  var employeePerformance = employee.employeePerformance;

  var bonusPercentage = basePerformanceBonusCalulator(employeePerformance);
  console.log(employeeNumber.length);
  bonusPercentage += employeeLongevityBonus(employeeNumber);
  bonusPercentage -= maxSalaryDeduction(employeeSalary);
  bonusPercentage = checkMaxAndMin(bonusPercentage);

  var bonus = employeeSalary * bonusPercentage;
  var totalCompensation = employeeSalary + bonus;
  var roundedBonus = Math.round(bonus);

  return [employeeName, bonusPercentage, totalCompensation, roundedBonus];
}

function basePerformanceBonusCalulator(employee) {
  var baseBonusPercentage = 0;
  switch (employee.employeePerformance) {
    case 5:
      baseBonusPercentage = 0.1;
      break;
    case 4:
      baseBonusPercentage = 0.06;
      break;
    case 3:
      baseBonusPercentage = 0.04;
      break;
  }
  return baseBonusPercentage;
}

function employeeLongevityBonus(employee){
  console.log(employee);
  var employeeNumber;
  var longevityBonus = 0;
  if(employeeNumber.length == 4){
    longevityBonus = 0.05;
  }
  return longevityBonus;
}

function maxSalaryDeduction(employee) {
  var employeeSalary;
  var deduction = 0;
  if(employeeSalary > 65000){
    deduction = 0.01;
  }
  return deduction;
}

function checkMaxAndMin(bonusPercentage){
  bonusPercentage = Math.min(bonusPercentage, .13);
  bonusPercentage = Math.max(bonusPercentage, 0);
  return bonusPercentage;
}
