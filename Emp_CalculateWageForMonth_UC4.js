const isparttime = 1;
const isfulltime =2;
const parttimeHrs = 4;
const fulltimeHrs = 8;
const wagePerHr   = 20;

function getWorkingHours(empCheck) {

  switch(empCheck) {
    case 1:
        return parttimeHrs;
        break;
    case 2:
        return fulltimeHrs;
        break;
    default:
        return 0;
  }
}

const numofWorkingDays =20;
let empHrs =0;
for(let day =0; day < numofWorkingDays; day++) {
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * wagePerHr;
console.log("Total Hours: "+empHrs);
console.log("Employee Wage: "+empWage);